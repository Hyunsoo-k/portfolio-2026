"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MENU_LINKS } from '@/shared/constants/menu-links';

import styles from "./Nav.module.scss";

export const Nav = () => {
  const pathname = usePathname();
  
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu_list}>
        {MENU_LINKS.map((item) => (
          <li key={item.menu} className={styles.menu_item}>
            <Link
              data-active={pathname === item.url}
              href={item.url}
              className={styles.link}
            >
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};