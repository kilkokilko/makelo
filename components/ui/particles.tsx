"use client";

import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface ParticlesProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const hexInt = parseInt(hex, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);

  // Pointer position lives in a ref, never in state — tracking it through
  // React would re-render this subtree on every single mousemove.
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pointer = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const rafID = useRef<number | null>(null);
  const rgb = useRef<number[]>(hexToRgb(color));
  const dprRef = useRef(1);

  useEffect(() => {
    rgb.current = hexToRgb(color);
  }, [color]);

  useEffect(() => {
    const container = canvasContainerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    context.current = canvas.getContext("2d");
    // Cap DPR — a 3x buffer of soft dots costs a lot for no visible gain.
    dprRef.current = Math.min(window.devicePixelRatio || 1, 2);

    const circleParams = (): Circle => ({
      x: Math.floor(Math.random() * canvasSize.current.w),
      y: Math.floor(Math.random() * canvasSize.current.h),
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 2) + size,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      magnetism: 0.1 + Math.random() * 4,
    });

    const drawCircle = (circle: Circle, update = false) => {
      const ctx = context.current;
      if (!ctx) return;
      const { x, y, translateX, translateY, size: s, alpha } = circle;
      ctx.translate(translateX, translateY);
      ctx.beginPath();
      ctx.arc(x, y, s, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${rgb.current.join(", ")}, ${alpha})`;
      ctx.fill();
      ctx.setTransform(dprRef.current, 0, 0, dprRef.current, 0, 0);
      if (!update) circles.current.push(circle);
    };

    const clearContext = () => {
      context.current?.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h,
      );
    };

    const resizeCanvas = () => {
      if (!context.current) return;
      const dpr = dprRef.current;
      canvasSize.current.w = container.offsetWidth;
      canvasSize.current.h = container.offsetHeight;

      canvas.width = canvasSize.current.w * dpr;
      canvas.height = canvasSize.current.h * dpr;
      canvas.style.width = `${canvasSize.current.w}px`;
      canvas.style.height = `${canvasSize.current.h}px`;
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      circles.current = [];
      for (let i = 0; i < quantity; i++) drawCircle(circleParams());
    };

    const remapValue = (
      value: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number,
    ): number => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    };

    const animate = () => {
      clearContext();
      circles.current.forEach((circle: Circle, i: number) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.current.h - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat(
          remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
        );
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha;
          }
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }
        circle.x += circle.dx + vx;
        circle.y += circle.dy + vy;
        circle.translateX +=
          (mouse.current.x / (staticity / circle.magnetism) -
            circle.translateX) /
          ease;
        circle.translateY +=
          (mouse.current.y / (staticity / circle.magnetism) -
            circle.translateY) /
          ease;

        drawCircle(circle, true);

        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.current.h + circle.size
        ) {
          circles.current.splice(i, 1);
          drawCircle(circleParams());
        }
      });
      rafID.current = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (rafID.current == null) rafID.current = requestAnimationFrame(animate);
    };
    const stop = () => {
      if (rafID.current != null) {
        cancelAnimationFrame(rafID.current);
        rafID.current = null;
      }
    };

    resizeCanvas();

    // Only animate while on screen and the tab is focused.
    let onScreen = false;
    const sync = () => (onScreen && !document.hidden ? start() : stop());

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { rootMargin: "120px" },
    );
    io.observe(container);
    document.addEventListener("visibilitychange", sync);

    const onMouseMove = (event: MouseEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      const rect = canvas.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = pointer.current.x - rect.left - w / 2;
      const y = pointer.current.y - rect.top - h / 2;
      if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, [quantity, staticity, ease, size, vx, vy, refresh]);

  return (
    <div
      className={cn("pointer-events-none", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};
