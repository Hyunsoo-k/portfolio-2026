import { SubPageHeroSection } from '@/widgets/sub-page-hero-section/ui/sub-page-hero-section/SubPageHeroSection';
import { ProjectPageProjectSection } from '../project-page-project-section/ProjectPageProjectSection';

import styles from "./ProjectPage.module.scss";

export const ProjectPage = () => {
  return (
    <main className={styles.project_page}>
      <SubPageHeroSection
        theme="dark"
        title={{ top: "I create joy", bottom: "in digital life." }}
        eyebrow={{ top: "projects born from my passion", bottom: "inspired by everyday life" }}
      />
      <ProjectPageProjectSection />
    </main>
  );
};