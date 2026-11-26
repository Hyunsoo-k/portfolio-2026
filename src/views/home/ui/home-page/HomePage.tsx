import { HeroSection } from '../hero-section/HeroSection';
import { ProjectSection } from '../project-section/ProjectSection';
import { AboutSection } from '../about-section/AboutSection';
import { PostSection } from '../post-section/PostSection'
import { ContactSection } from '../contact-section/ContactSection';

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.home_page}>
      <HeroSection />
      <ProjectSection />
      <PostSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};