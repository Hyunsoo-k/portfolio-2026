/* eslint-disable @next/next/no-img-element */

"use client";

import { UnderlineLink } from '@/shared/ui/underline-link/UnderlineLink';

import serverImg from "../../assets/server.png";
import labtopImg from "../../assets/labtop.png";

import styles from "./AboutSection.module.scss";

export const AboutSection = () => {
  return (
    <>
      <section data-theme="dark" className={styles.about_section}>
        <div className={styles.text_container}>
          <h2 className={styles.title}>
            Develop for a<br />
            better tomorrow.
          </h2>
          <p className={styles.desc}>
            I approach development with a foundation in computer science,
            applying analytical thinking and engineering principles
            to solve problems. I focus on understanding systems
            and building scalable, maintainable solutions.
          </p>
        </div>
        <div className={styles.figure_container}>
          <figure className={styles.figure}>
            <img src={serverImg.src} alt="" className={styles.img} />
            <figcaption className={styles.caption}>develop api server</figcaption>
          </figure>
          <figure className={styles.figure}>
            <img src={labtopImg.src} alt="" className={styles.img} />
            <figcaption className={styles.caption}>develop client</figcaption>
          </figure>
        </div>
        <div className={styles.link_wrapper}>
          <UnderlineLink text="More about me." url="/about" />
        </div>
      </section>
      <div className={styles.background_block} />
    </>
  );
};