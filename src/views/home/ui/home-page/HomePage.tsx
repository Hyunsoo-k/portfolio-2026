import { HomePageHeroSection } from '../home-page-hero-section/HomePageHeroSection';
import { HomePageProjectSection } from '../home-page-project-section/HomePageProjectSection';

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.home_page}>
      <HomePageHeroSection />
      <HomePageProjectSection />
      <section data-theme="dark" className={styles.dummy}></section>
    </main>
  );
};