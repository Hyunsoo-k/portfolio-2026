import { POSTS } from '@/entities/post/constants/posts.constant';
import { PostCard } from '@/entities/post/ui/post-card/PostCard';
import { Slider } from '@/shared/ui/slider/Slider';
import { UnderlineLink } from '@/shared/ui/underline-link/UnderlineLink';

import styles from "./HomePagePostSection.module.scss"

export const HomePagePostSection = () => {
  const cards = POSTS.map((post) => (
    <PostCard key={`${post.title}`} post={post} />
  ));

  return (
    <section className={styles.home_page_post_section}>
      <Slider items={cards} />
      <footer className={styles.footer}>
        <UnderlineLink text="View more posts" url="/post" />
      </footer>
    </section>
  );
};