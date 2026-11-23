"use client";

import { usePathname } from "next/navigation";

import { PROJECTS } from "@/entities/project/constants/projects.constant";
import { ProjectCard } from "../project-card/ProjectCard";

import styles from "./ProjectGrid.module.scss";

const getTitleSize = (index: number, isHome: boolean): "default" | "small" => {
  if (isHome) {
    return index === 0 ? "default" : "small";
  }

  const pos = index % 9;
  return pos === 4 || pos === 5 || pos === 8 ? "default" : "small";
};

export const ProjectGrid = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const projects = isHome ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <ul className={`${styles.project_grid} ${isHome ? styles.is_home : ""}`}>
      {projects.map((project, index) => (
        <li key={`${project.title}-${index}`} className={styles.project_item}>
          <ProjectCard
            project={project}
            titleSize={getTitleSize(index, isHome)}
          />
        </li>
      ))}
    </ul>
  );
};