
"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";

import styles from "./Slider.module.scss";

type Props = {
  items: ReactNode[];
};

export const Slider = ({ items }: Props) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const handlePointerDown = (e: PointerEvent<HTMLUListElement>) => {
    if (!sliderRef.current) {
      return;
    }

    e.preventDefault();

    dragRef.current.isDragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.scrollLeft = sliderRef.current.scrollLeft;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLUListElement>) => {
    if (!dragRef.current.isDragging || !sliderRef.current) {
      return;
    }

    const walk = e.clientX - dragRef.current.startX;

    sliderRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const handlePointerUp = () => {
    dragRef.current.isDragging = false;
  };

  return (
    <div className={styles.slider}>
      <ul
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={styles.track}
      >
        {items.map((item, index) => (
          <li key={`slide-item--${index}`} className={styles.track_item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
