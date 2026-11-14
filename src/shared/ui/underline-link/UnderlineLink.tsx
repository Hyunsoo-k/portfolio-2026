import Link from 'next/link';

import styles from "./UnderlineLink.module.scss";

type Props = {
  url: string;
  text: string;
};

export const UnderlineLink = ({ url, text }: Props) => {
  return (
    <Link href={url} className={styles.underline_link}>{text}</Link>
  );
};