"use client";

import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

type AnimatedThemeTogglerProps = React.ComponentPropsWithoutRef<"button"> & {
  duration?: number;
};

export const AnimatedThemeToggler = ({
  className,
  duration = 500,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // The resolved theme is only knowable on the client, so the icon and label
  // deliberately commit one render late to keep SSR and hydration in step.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const next = isDark ? "light" : "dark";

    // Browsers without the View Transitions API still get a plain switch.
    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    );

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
      },
      {
        duration,
        easing: "cubic-bezier(0.28, 0.11, 0.32, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }, [isDark, setTheme, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      // Resolved theme is unknown during SSR, so the label only commits after
      // mount — otherwise the server and client markup disagree.
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
      className={cn(
        "grid size-9 place-items-center rounded-full border border-white/12 bg-white/5 text-current transition-colors hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {mounted ? (
        isDark ? (
          <SunDim className="size-4" />
        ) : (
          <Moon className="size-4" />
        )
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
};

export default AnimatedThemeToggler;
