/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import type { Post } from '../../types/post.type';

import styles from "./PostCard.module.scss";

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return (
    <Link href={post.url} className={styles.post_card}>
      <img
        src={post.thumbnailSrc}
        alt={`${post.title} thumbnail`}
        className={styles.thumbnail}
      />
      <div className={styles.info}>
        <h5 className={styles.title}>{post.title}</h5>
        <p className={styles.desc}>{post.description}</p>
      </div>
      <span className={styles.category}>{post.category}</span>
    </Link>
  );
};