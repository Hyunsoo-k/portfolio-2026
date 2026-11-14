"use client";

import { usePathname } from 'next/navigation';

import { PROJECTS } from '@/entities/project/constants/projects.constant';
import { ProjectCard } from '../ProjectCard';

import styles from "./ProjectGrid.module.scss";

export const ProjectGrid = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const projects = isHome ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <ul className={styles.project_grid}>
      {projects.map((project, index) => (
        <li key={`${project.title} li`} className={styles.project_item}>
          <ProjectCard
            project={project}
            titleSize={index % 3 !== 0 ? "small" : "default"}
          />
        </li>
      ))}
    </ul>
  );
};