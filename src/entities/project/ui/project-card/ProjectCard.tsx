/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import type { Project } from '../../types/project.type';

import styles from "./ProjectCard.module.scss";

type Props = {
  project: Project;
  titleSize?: "default" | "small";
};

export const ProjectCard = ({ project, titleSize }: Props) => {
  return (
    <Link
      href={project.url}
      className={`${styles.project_card} ${titleSize === "small" ? styles.small_title : ""}`}
    >
      <span className={styles.meta}>{project.type} / {project.personnel}</span>
      <img
        src={project.thumbnailSrc}
        alt={`${project.title} thumbnail`}
        className={styles.thumbnail}
      />
      <div className={styles.info}>
        <h4 className={styles.title}>{project.title}</h4>
        <p className={styles.summary}>{project.summary}</p>
      </div>
    </Link>
  );
};