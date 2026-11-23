import { ProjectGrid } from '@/entities/project/ui/project-grid/ProjectGrid';

import styles from "./ProjectPageProjectSection.module.scss";

export const ProjectPageProjectSection = () => {
  return (
    <section className={styles.project_page_project_section}>
      <ProjectGrid />
    </section>
  );
};