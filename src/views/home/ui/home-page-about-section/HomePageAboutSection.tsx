/* eslint-disable @next/next/no-img-element */

"use client";

import serverImg from "../../assets/server.png";
import labtopImg from "../../assets/labtop.png";

import styles from "./HomePageAboutSection.module.scss";
import { UnderlineLink } from '@/shared/ui/underline-link/UnderlineLink';

export const HomePageAboutSection = () => {
  return (
    <section data-theme="dark" className={styles.home_page_about_section}>
      <div className={styles.fig_container}>
        <figure className={styles.figure}>
          <img src={serverImg.src} alt="" className={styles.img} />
          <figcaption className={styles.caption}>Develop api server</figcaption>
        </figure>
        <figure className={styles.figure}>
          <img src={labtopImg.src} alt="" className={styles.img} />
          <figcaption className={styles.caption}>Develop client</figcaption>
        </figure>
      </div>
      <div className={styles.text_container}>
        <h5 className={styles.title}>
          Helping brands to stand out<br />
          in digital era.
        </h5>
        <p className={styles.desc}>
          I enjoy turning ideas into meaningful digital experiences
          through thoughtful development and practical technology.
          From frontend interfaces to backend systems, I focus on building intuitive,
          functional, and reliable solutions that help brands connect with people.
        </p>
      </div>
      <div className={styles.link_wrapper}>
        <UnderlineLink text="More about me." url="/about" />
      </div>
    </section>
  );
};