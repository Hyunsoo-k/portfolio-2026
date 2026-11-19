import { HomePageContactCard } from '../home-page-contact-card/HomePageContactCard';

import wallpaperImg from "../../assets/wallpaper.png";

import styles from "./HomePageContactSection.module.scss";

export const HomePageContactSection = () => {
  return (
    <section className={styles.home_page_contact_section}>
      <div
        className={styles.img_background}
        style={{ backgroundImage: `url(${wallpaperImg.src})` }}
      />
      <div data-theme="dark" className={styles.dark_background} />
      <HomePageContactCard />
    </section>
  );
};