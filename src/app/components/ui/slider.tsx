"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cx = (...c: Array<string | false | null | undefined>) =>
  c.filter(Boolean).join(" ");

type SliderProps = {
  children: React.ReactNode;
  /** Opciones de Embla: https://www.embla-carousel.com/api/options/ */
  options?: EmblaOptionsType;
  /** autoplay on/off */
  autoplay?: boolean;
  /** intervalo autoplay en ms (NO lo toco si no quieres) */
  interval?: number;
  /** clases extra para el wrapper del componente */
  className?: string;
  /** clases para cada slide (controla cuántos por vista con Tailwind) */
  slideClassName?: string;
  /** forzar igualación de altura (on por defecto) */
  equalizeHeight?: boolean;
};

export function Slider({
  children,
  options,
  autoplay = true,
  interval = 1800000000,
  className = "",
  // 1 por vista en móvil, 2 en sm, 3 en lg
  slideClassName = "basis-full sm:basis-1/2 lg:basis-1/3",
  equalizeHeight = true,
}: SliderProps) {
  const plugin = React.useRef(
    Autoplay({
      delay: interval,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      containScroll: "trimSnaps", // snap limpio: no se “asoman” slides
      slidesToScroll: 1,
      ...options,
    },
    autoplay ? [plugin.current] : []
  );

  const items = React.Children.toArray(children);
  const [selected, setSelected] = React.useState(0);
  const [maxH, setMaxH] = React.useState<number | null>(null);

  // Clona el hijo para añadirle h-full (sin modificar tu Card original)
  const withFullHeight = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      const prev = (child.props as any)?.className ?? "";
      return React.cloneElement(child as React.ReactElement<any>, {
        className: cx(prev, "h-full"),
      });
    }
    return child;
  };

  const measureHeights = React.useCallback(() => {
    if (!emblaApi || !equalizeHeight) return;
    const slides = emblaApi.slideNodes(); // <div> de cada slide en el track
    if (!slides.length) return;

    // Medimos el primer hijo del slide (tu Card) si existe; si no, el propio slide
    const heights = slides.map((s) => {
      const el = (s.firstElementChild as HTMLElement) ?? (s as HTMLElement);
      return el?.offsetHeight ?? s.clientHeight ?? 0;
    });

    const max = Math.max(...heights, 0);
    setMaxH(max > 0 ? max : null);
  }, [emblaApi, equalizeHeight]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Suscripciones Embla + observación de cambios de tamaño (imágenes, fuentes, etc.)
  React.useEffect(() => {
    if (!emblaApi) return;

    // Medir al montar
    requestAnimationFrame(() => measureHeights());
    onSelect();

    // Recalcular en eventos de Embla
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      requestAnimationFrame(() => measureHeights());
      onSelect();
    });

    // Recalcular cuando cambie el contenido (ResizeObserver)
    let ro: ResizeObserver | null = null;
    if (equalizeHeight) {
      ro = new ResizeObserver(() => measureHeights());
      emblaApi.slideNodes().forEach((n) => ro!.observe(n));
    }

    // Recalcular en resize de ventana
    const onWinResize = () => measureHeights();
    window.addEventListener("resize", onWinResize);

    return () => {
      window.removeEventListener("resize", onWinResize);
      ro?.disconnect();
    };
  }, [emblaApi, measureHeights, onSelect, equalizeHeight]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <section
      className={cx("relative w-full", className)}
      aria-roledescription="carousel"
      aria-label="Slider"
    >
      {/* Viewport (clip) */}
      <div
        ref={emblaRef}
        className="overflow-hidden w-full rounded-2xl touch-pan-y select-none"
      >
        {/* Track sin gap; gutters con -mx / px */}
        <div className="flex items-stretch -mx-3">
          {items.map((child, i) => (
            <div
              key={i}
              className={cx("min-w-0 shrink-0 px-3", slideClassName)}
              // ← forzamos MISMA altura en todos los slides (padre), según la mayor medida
              style={equalizeHeight && maxH ? { minHeight: maxH } : undefined}
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} de ${items.length}`}
            >
              {/* wrapper para permitir que el hijo rellene la altura */}
              <div className="h-full">{withFullHeight(child)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full border bg-background/80 backdrop-blur p-2 active:scale-95 hover:bg-accent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full border bg-background/80 backdrop-blur p-2 active:scale-95 hover:bg-accent"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={cx(
              "h-2.5 w-2.5 rounded-full border transition",
              selected === i
                ? "bg-foreground"
                : "bg-muted hover:bg-muted-foreground/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}
