import { MENU_LINKS } from '@/shared/constants/menu-links';
import { LocalClock } from '@/shared/ui/local-clock/LocalClock';
import { ExternalLinkList } from '@/shared/ui/external_link_list/ExternalLinkList';

import styles from "./Footer.module.scss";
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h3 className={styles.top_title}>
            Let&apos;s work together.
          </h3>
          <div className={styles.container}>
            <h5 className={styles.container_title}>Navigation</h5>
            <ul className={styles.menu_list}>
              {MENU_LINKS.map((menu) => (
                <li key={menu.menu} className={styles.menu_item}>
                  <Link href={menu.url} className={styles.menu}>{menu.menu}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.container}>
            <h5 className={styles.container_title}>Local time</h5>
            <LocalClock />
          </div>
          <div className={styles.container}>
            <h5 className={styles.container_title}>Links</h5>
            <ExternalLinkList />
          </div>
        </div>
      </div>
    </footer>
  );
};