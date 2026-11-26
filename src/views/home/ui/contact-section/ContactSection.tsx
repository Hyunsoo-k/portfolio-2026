import { ContactCard } from '../contact-card/ContactCard';

import wallpaperImg from "../../assets/wallpaper.png";

import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <section className={styles.contact_section}>
      <div
        className={styles.img_background}
        style={{ backgroundImage: `url(${wallpaperImg.src})` }}
      />
      <div data-theme="dark" className={styles.dark_background} />
      <ContactCard />
    </section>
  );
};