import { HomePageHeroSection } from '../home-page-hero-section/HomePageHeroSection';
import { HomePageProjectSection } from '../home-page-project-section/HomePageProjectSection';
import { HomePageAboutSection } from '../home-page-about-section/HomePageAboutSection';
import { HomePagePostSection } from '../home-page-post-section/HomePagePostSection'
import { HomePageContactSection } from '../home-page-contact-section/HomePageContactSection';

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.home_page}>
      <HomePageHeroSection />
      <HomePageProjectSection />
      <HomePageAboutSection />
      <HomePagePostSection />
      <HomePageContactSection />
    </main>
  );
};