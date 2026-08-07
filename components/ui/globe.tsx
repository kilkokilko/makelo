"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

/**
 * The default config below is a static preset, so `onRender` is supplied
 * later by the component rather than being required up front.
 */
type GlobeConfig = Omit<COBEOptions, "onRender"> & {
  onRender?: (state: Record<string, number>) => void;
};

const GLOBE_CONFIG: GlobeConfig = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.28,
  dark: 0,
  diffuse: 1.2,
  scale: 1,
  mapSamples: 16000,
  // baseColor is the sphere itself and the land dots are drawn *brighter*
  // than it — so the base has to stay dark or the continents vanish.
  mapBrightness: 6,
  baseColor: [0.28, 0.3, 0.36],
  markerColor: [0.18, 0.62, 1],
  glowColor: [0.4, 0.5, 0.7],
  markers: [
    // Hamburg, Sitz von makelo
    { location: [53.5511, 9.9937], size: 0.11 },
    { location: [52.52, 13.405], size: 0.05 },
    { location: [51.5074, -0.1278], size: 0.06 },
    { location: [40.7128, -74.006], size: 0.07 },
    { location: [37.7749, -122.4194], size: 0.05 },
    { location: [48.8566, 2.3522], size: 0.05 },
    { location: [59.3293, 18.0686], size: 0.04 },
    { location: [1.3521, 103.8198], size: 0.05 },
    { location: [35.6762, 139.6503], size: 0.05 },
    { location: [-33.8688, 151.2093], size: 0.04 },
    { location: [19.076, 72.8777], size: 0.05 },
    { location: [-23.5505, -46.6333], size: 0.05 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: GlobeConfig;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const rRef = useRef(0);

  const [r, setR] = useState(0);

  // Mirrored into a ref so the render callback (which lives outside React)
  // can read the latest drag offset without re-creating the globe.
  useEffect(() => {
    rRef.current = r;
  }, [r]);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      setR(delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const measure = () => {
      // Measure before creating the globe — building it at width 0 is what
      // produces a washed-out, texture-less sphere.
      widthRef.current = canvas.offsetWidth || 400;
    };

    measure();

    // Built once and kept for the lifetime of the section. Tearing the globe
    // down on scroll/visibility churns WebGL contexts, and browsers cap how
    // many can be live — past that, re-creation silently yields a blank
    // canvas. rAF is already throttled in hidden tabs, so there is nothing to
    // reclaim by pausing it manually.
    const globe = createGlobe(canvas, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state: Record<string, number>) => {
        if (!pointerInteracting.current) phiRef.current += 0.004;
        state.phi = phiRef.current + rRef.current;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    } as COBEOptions);

    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
      globe.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("mx-auto aspect-square w-full max-w-[600px]", className)}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
