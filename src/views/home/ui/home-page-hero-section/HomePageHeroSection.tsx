import styles from "./HomePageHeroSection.module.scss";

export const HomePageHeroSection = () => {
  return (
    <section data-theme="dark" className={styles.home_page_hero_section}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          <span className={styles.title_line}>
            <span className={styles.title_line_span}>fullstack developer</span>
            digital
          </span>
          <span className={styles.title_line}>solution</span>
          <span className={styles.title_line}>
            builder.
            <span className={styles.title_line_span}>making delights</span>
          </span>
        </h1>
      </div>
    </section>
  );
};