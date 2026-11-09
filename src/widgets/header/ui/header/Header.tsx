"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { MenuButton } from '../menu-button/MenuButton';
import { MobileMenu } from '../mobile-menu/MobileMenu';
import { Nav } from '../nav/Nav';

import styles from "./Header.module.scss";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    let animationFrameId: number;

    const checkUnderTheme = () => {
      const rect = header.getBoundingClientRect();

      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const elements = document.elementsFromPoint(x, y);

      let nextTheme: "light" | "dark" = "dark";

      for (const el of elements) {
        if (header.contains(el)) {
          continue;
        }
        const themeElement = el.closest("[data-theme]");

        if (!themeElement || header.contains(themeElement)) {
          continue;
        }

        nextTheme =
          themeElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";

        break;
      }

      setTheme((prev) => (prev === nextTheme ? prev : nextTheme));
    };

    const animate = () => {
      checkUnderTheme();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("scroll", checkUnderTheme);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", checkUnderTheme);
    };
  }, []);

  return (
    <header ref={headerRef} data-theme={theme} className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand_link}>engineer.hs</Link>
        <MenuButton isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <Nav />
      </div>
    </header>
  );
};