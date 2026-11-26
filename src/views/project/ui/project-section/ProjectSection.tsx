import { ProjectGrid } from '@/entities/project/ui/project-grid/ProjectGrid';

import styles from "./ProjectSection.module.scss";

export const ProjectSection = () => {
  return (
    <section className={styles.project_section}>
      <ProjectGrid />
    </section>
  );
};