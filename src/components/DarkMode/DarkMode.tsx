'use client';

import React, { useState, useRef, useEffect } from 'react';
import s from './DarkMode.module.scss';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export const DarkMode: React.FC = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const bodyNode = useRef<HTMLElement>();

  useEffect(() => {
    bodyNode.current = document.querySelector('body') as HTMLElement;
  }, []);

  const handleChangeTheme = () => {
    setIsLightTheme(() => !isLightTheme);

    if (isLightTheme && bodyNode.current) {
      bodyNode.current.setAttribute('data-theme', 'dark');
    } else if (!isLightTheme && bodyNode.current){
      bodyNode.current.setAttribute('data-theme', 'light');
    }
  };

  return (
        <div className={s.dark_mode}>
            <input
                className={s.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                checked={!isLightTheme}
                onChange={handleChangeTheme}
            />

            <label className={s.dark_mode_label} htmlFor='darkmode-toggle'>
                <FontAwesomeIcon icon={faSun} className={s.sun} />
                <FontAwesomeIcon icon={faMoon} className={s.moon} />
            </label>
        </div>
  );
};
