import { HeroSection } from '@/widgets/hero-section/ui/hero-section/HeroSection';
import { ProjectSection } from '../project-section/ProjectSection';

import styles from "./ProjectPage.module.scss";

export const ProjectPage = () => {
  return (
    <main className={styles.project_page}>
      <HeroSection
        theme="dark"
        title={{ top: "I create joy", bottom: "in digital life." }}
        eyebrow={{ top: "projects born from my passion", bottom: "inspired by everyday life" }}
      />
      <ProjectSection />
    </main>
  );
};