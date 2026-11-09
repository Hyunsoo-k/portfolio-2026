"use client";

import type { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiArrowUpLeft } from "react-icons/hi2";

import { MENU_LINKS } from '@/shared/constants/menu-links';
import { PROFILE_INFOS } from '@/shared/constants/profile-infos';
import { EXTERNAL_LINKS } from '@/shared/constants/external-links';

import styles from "./MobileMenu.module.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();

  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const updateKstTime = () => {
      const now = new Date();
      const kstTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);

      setTimeString(kstTime);
    };

    updateKstTime();
    const timer = setInterval(updateKstTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return createPortal(
    <div
      data-theme="dark"
      data-state={isOpen ? "open" : "close"}
      data-lenis-prevent
      className={styles.mobile_menu}
    >
      <ul className={styles.menu_list}>
        {MENU_LINKS.map((item) => (
          <li key={item.menu} className={styles.menu_item}>
            <Link
              href={item.url}
              onClick={handleLinkClick}
              data-active={pathname === item.url}
              className={styles.menu_link}
            >
              {item.menu}
              {pathname === item.url && <HiArrowUpLeft className={styles.arrow_icon} />}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.info}>
        <ul className={styles.profile_info_list}>
          {PROFILE_INFOS.map((item) => (
            <li key={item} className={styles.profile_info_item}>
              <span className={styles.profile_info}>{item}</span>
            </li>
          ))}
        </ul>
        <ul className={styles.external_link_list}>
          {EXTERNAL_LINKS.map((item) => (
            <li key={item.text} className={styles.external_link_item}>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.external_link}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="mailto:eng.hyunsoo@gmail.com"
          className={styles.email}
        >
          eng.hyunsoo@gmail.com
        </Link>
      </div>
      <footer className={styles.footer}>
        <span className={styles.clock}>KST {timeString}</span>
      </footer>
    </div>,
    document.body
  );
};