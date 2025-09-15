"use client";
import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, type Transition, easeInOut } from "framer-motion";

type Effect = "fade" | "wipe";

type Props = {
  /** Imágenes */
  srcA: string | StaticImageData;
  srcB: string | StaticImageData;
  altA?: string;
  altB?: string;

  /** Tamaño del frame (elige uno) */
  height?: number; // px fijo
  aspectRatio?: number | string; // "16 / 9" | 1.777..., default "1 / 1"

  /** Animación */
  effect?: Effect; // "fade" | "wipe" (default "fade")
  durationMs?: number; // default 450
  fit?: "cover" | "contain"; // default "cover"

  /** Interacción desktop/mobile */
  holdToReveal?: boolean; // press & hold = muestra B, al soltar vuelve A
  toggleOnTap?: boolean; // tap alterna (default true si no usas holdToReveal)
  hoverToReveal?: boolean; // hover en desktop (default true)

  /** Autoplay SOLO en mobile */
  mobileAuto?: boolean; // default true
  mobileIntervalMs?: number; // default 2500 ms
  pauseOnInteractionMs?: number; // pausa autoplay tras interacción (default 3000)

  /** Estilos */
  className?: string;
  roundedClassName?: string; // default "rounded-xl"
  sizes?: string; // sizes para <Image>
};

export default function TwoImageTransition({
  srcA,
  srcB,
  altA = "image A",
  altB = "image B",
  height,
  aspectRatio = "1 / 1",
  effect = "fade",
  durationMs = 450,
  fit = "cover",
  holdToReveal = false,
  toggleOnTap = true,
  hoverToReveal = true,
  mobileAuto = true,
  mobileIntervalMs = 2500,
  pauseOnInteractionMs = 3000,
  className = "",
  roundedClassName = "rounded-xl",
  sizes = "100vw", // ⬅️ por defecto ocupa todo el ancho de viewport (sobrescribe si quieres)
}: Props) {
  const [showB, setShowB] = React.useState(false);

  /** Detecta entorno “mobile-like”: pointer coarse o sin hover */
  const [isMobileLike, setIsMobileLike] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse), (hover: none)");
    const update = () => setIsMobileLike(mq.matches);
    update();
    // compatibilidad con navegadores
    // @ts-expect-error legacy addListener fallback
    mq.addEventListener
      ? mq.addEventListener("change", update)
      : mq.addListener(update);
    return () => {
      // @ts-expect-error legacy removeListener fallback
      mq.removeEventListener
        ? mq.removeEventListener("change", update)
        : mq.removeListener(update);
    };
  }, []);

  /** Pausa temporal para que autoplay no interfiera tras interacción */
  const [pausedUntil, setPausedUntil] = React.useState<number>(0);
  const now = () =>
    typeof performance !== "undefined" ? performance.now() : Date.now();
  const pauseAuto = React.useCallback(() => {
    setPausedUntil(now() + pauseOnInteractionMs);
  }, [pauseOnInteractionMs]);

  /** Autoplay únicamente en mobile */
  React.useEffect(() => {
    if (!mobileAuto || !isMobileLike) return;
    let id: number | undefined;
    const tick = () => {
      if (now() < pausedUntil) return;
      setShowB((v) => !v);
    };
    id = window.setInterval(tick, mobileIntervalMs);
    return () => {
      if (id) window.clearInterval(id);
    };
  }, [mobileAuto, isMobileLike, mobileIntervalMs, pausedUntil]);

  /** Handlers de interacción (desktop y mobile) */
  const onPointerDown = () => {
    if (holdToReveal) {
      setShowB(true);
      pauseAuto();
    }
  };
  const onPointerUp = () => {
    if (holdToReveal) {
      setShowB(false);
      pauseAuto();
    }
  };
  const onPointerCancel = () => {
    if (holdToReveal) {
      setShowB(false);
      pauseAuto();
    }
  };
  const onClick = () => {
    if (holdToReveal) return; // en holdToReveal no togglear con tap
    if (toggleOnTap) {
      setShowB((v) => !v);
      pauseAuto();
    }
  };
  const onMouseEnter = () => {
    if (hoverToReveal && !isMobileLike) setShowB(true);
  };
  const onMouseLeave = () => {
    if (hoverToReveal && !isMobileLike) setShowB(false);
  };

  /** Layout del frame */
  const style: React.CSSProperties = { width: "100%" }; // ⬅️ asegura ocupar todo el ancho del padre
  if (typeof height === "number") {
    style.height = `${height}px`;
  } else {
    style.aspectRatio =
      typeof aspectRatio === "number" ? String(aspectRatio) : aspectRatio;
  }

  /** Transición tipada */
  const t: Transition = { duration: durationMs / 1000, ease: easeInOut };
  const objFitClass = fit === "contain" ? "unset" : "unset";

  return (
    <div
      className={[
        // ⬇️ rellena todo el ancho del contenedor, incluso en layouts flex/grid
        "relative block w-full min-w-0 max-w-none overflow-hidden bg-muted",
        roundedClassName,
        className,
      ].join(" ")}
      style={style}
      role="img"
      aria-label="two-image transition"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      draggable={false}
    >
      {/* Imagen base (A) */}
      <Image
        src={srcA}
        alt={altA}
        fill
        sizes={sizes}
        className={objFitClass}
        priority
      />

      {/* Capa animada (B) */}
      {effect === "fade" ? (
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: showB ? 1 : 0 }}
          transition={t}
          aria-hidden
          style={{ willChange: "opacity" }}
        >
          <Image
            src={srcB}
            alt={altB}
            fill
            sizes={sizes}
            className={objFitClass}
            priority={false}
          />
        </motion.div>
      ) : (
        // Wipe (reveal lateral: derecha -> izquierda)
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            clipPath: showB ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          }}
          transition={t}
          aria-hidden
          style={{ willChange: "clip-path" }}
        >
          <Image
            src={srcB}
            alt={altB}
            fill
            sizes={sizes}
            className={objFitClass}
            priority={false}
          />
        </motion.div>
      )}
    </div>
  );
}
