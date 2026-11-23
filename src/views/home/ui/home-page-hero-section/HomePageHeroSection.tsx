import styles from "./HomePageHeroSection.module.scss";

export const HomePageHeroSection = () => {
  return (
    <section data-theme="dark" className={styles.home_page_hero_section}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          <span className={styles.span}>
            modern
            <span className={styles.eyebrow}>
              helping brands to stand out in the digital era
            </span>
          </span>
          <span className={styles.span}>creative</span>
          <span className={styles.span}>
            engineer.
            <span className={styles.eyebrow}>
              with creativity, precision, and purpose.
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
};