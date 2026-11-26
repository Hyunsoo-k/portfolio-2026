/* eslint-disable @next/next/no-img-element */

import { UnderlineLink } from '@/shared/ui/underline-link/UnderlineLink';

import wallImg from "../../assets/wall.png";

import styles from "./ContactCard.module.scss";

export const ContactCard = () => {
  return (
    <div className={styles.contact_card}>
      <div className={styles.text_grid}>
        <h4 className={styles.title}>
          Get in touch.
        </h4>
        <p className={styles.desc}>
          Let&apos;s start a<br />
          project together.
        </p>
        <div className={styles.link_wrapper}>
          <UnderlineLink text="Contact." url="/contact" />
        </div>
      </div>
      <img src={wallImg.src} alt="" className={styles.img} />
    </div>
  );
};