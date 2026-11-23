import styles from "./SubPageHeroSection.module.scss";

type Props = {
  theme?: "dark";
  title: { top: string, bottom: string };
  eyebrow: { top: string, bottom: string };
};

export const SubPageHeroSection = ({ theme, title, eyebrow }: Props) => {
  return (
    <section data-theme={theme && "dark"} className={styles.sub_page_hero_section}>
      <h1 className={styles.title}>
        <span className={styles.title_line}>
          <span className={styles.title_span}>{title.top}</span>
          <span className={styles.eyebrow}>{eyebrow.top}</span>
        </span>
        <span className={styles.title_line}>
          <span className={styles.title_span}>{title.top}</span>
          <span className={styles.eyebrow}>{eyebrow.bottom}</span>
        </span>
      </h1>
    </section>
  );
};