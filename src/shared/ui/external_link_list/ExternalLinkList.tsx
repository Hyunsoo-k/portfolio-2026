import Link from 'next/link';
import { BsGithub } from "react-icons/bs";
import { ImBlogger2 } from "react-icons/im";

import styles from "./ExternalLinkList.module.scss";

export const ExternalLinkList = () => {
  return (
    <ul className={styles.external_link_list}>
      <li className={styles.item}>
        <Link
          href="https://github.com/Hyunsoo-k"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className={styles.icon} />
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          href="https://dog-foot.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImBlogger2 className={styles.icon} />
        </Link>
      </li>
    </ul>
  );
};