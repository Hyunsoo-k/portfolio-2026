import { ProjectGrid } from '@/entities/project/ui/project-grid/ProjectGrid';
import { UnderlineLink } from '@/shared/ui/underline-link/UnderlineLink';

import styles from "./ProjectSection.module.scss";

export const ProjectSection = () => {
  return (
    <section data-theme="light" className={styles.project_section}>
      <ProjectGrid />
      <footer className={styles.footer}>
        <UnderlineLink url="/project" text="View all projects" />
      </footer>
    </section>
  )
}