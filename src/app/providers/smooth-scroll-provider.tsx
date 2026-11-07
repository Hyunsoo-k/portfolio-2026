"use client";

import type { ReactNode } from 'react';
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import Lenis from "lenis";

type Props = {
  children: ReactNode;
};

export const SmoothScrollProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) {
      return;
    }

    lenisRef.current.scrollTo(0, { immediate: true });
    
    const timer = setTimeout(() => {
      lenisRef.current?.resize();
    }, 50);

    return () => {
      clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
};