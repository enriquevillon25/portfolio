"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderProps = {
  children: React.ReactNode;
  /** opciones de Embla: https://www.embla-carousel.com/api/options/ */
  options?: EmblaOptionsType;
  /** autoplay on/off */
  autoplay?: boolean;
  /** intervalo autoplay en ms */
  interval?: number;
  /** clases extra para el wrapper */
  className?: string;
  /** clases para cada slide (controla cuántos por vista con Tailwind) */
  slideClassName?: string;
};

export function Slider({
  children,
  options,
  autoplay = true,
  interval = 4000,
  className = "",
  slideClassName = "flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
}: SliderProps) {
  const plugin = React.useRef(
    Autoplay({
      delay: interval,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", ...options },
    autoplay ? [plugin.current] : []
  );

  const items = React.Children.toArray(children);
  const [selected, setSelected] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <section
      className={`relative ${className}`}
      aria-roledescription="carousel"
      aria-label="Slider"
    >
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex  gap-6 items-stretch">
          {items.map((child, i) => (
            <div
              key={i}
              className={`min-w-0 shrink-0 ${slideClassName} h-full`}
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} de ${items.length}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border bg-background/80 backdrop-blur p-2 hover:bg-accent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-background/80 backdrop-blur p-2 hover:bg-accent"
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
            className={`h-2.5 w-2.5 rounded-full border transition ${
              selected === i
                ? "bg-foreground"
                : "bg-muted hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
