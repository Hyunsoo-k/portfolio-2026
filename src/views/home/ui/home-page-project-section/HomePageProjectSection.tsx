import { ProjectGrid } from '@/entities/project/ui/project-card/project-grid/ProjectGrid';
import { UnderlineLink } from '@/shared/ui/underline-link/UnderlineLink';

import styles from "./HomePageProjectSection.module.scss";

export const HomePageProjectSection = () => {
  return (
    <section data-theme="light" className={styles.home_page_project_section}>
      <ProjectGrid />
      <footer className={styles.footer}>
        <UnderlineLink url="/project" text="View all projects" />
      </footer>
    </section>
  )
}