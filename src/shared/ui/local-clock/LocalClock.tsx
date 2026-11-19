"use client";

import { useEffect, useState } from 'react';

import styles from "./LocalClock.module.scss";

export const LocalClock = () => {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
      const updateKstTime = () => {
        const now = new Date();
        const kstTime = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Seoul',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
  
        setTimeString(kstTime);
      };
  
      updateKstTime();
      const timer = setInterval(updateKstTime, 1000);
  
      return () => clearInterval(timer);
    }, []);

  return (
    <span className={styles.local_clock}>
      {timeString}
    </span>
  );
};