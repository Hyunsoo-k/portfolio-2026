import type { Dispatch, SetStateAction } from 'react';

import styles from "./MenuButton.module.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuButton = ({ isOpen, setIsOpen }: Props) => {
  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      data-menu-state={isOpen ? "open" : "close"}
      onClick={handleButtonClick}
      className={styles.menu_button}
    />
  );
};