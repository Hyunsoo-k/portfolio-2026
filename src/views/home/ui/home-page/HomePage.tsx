import { HomePageHeroSection } from '../hero-section/HomePageHeroSection';

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.home_page}>
      <HomePageHeroSection />
      <section data-theme="light" className={styles.dummy}></section>
    </main>
  );
};