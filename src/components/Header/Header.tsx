import React from 'react';
import s from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt';
import { DarkMode } from '../DarkMode/DarkMode';

const navLinks = [
  { title: 'Products', path: '/products' },
  { title: 'Pricing', path: '/pricing' },
  { title: 'Company', path: '/company' },
  { title: 'Support', path: '/support' },
];

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <a href="#logo" className={s.logo}>
        <FontAwesomeIcon icon={faBolt} className={s.logoImg} />
        <span>SLT</span>
      </a>

      <div className={s.decor}></div>

      <nav className={s.nav}>
        <ul className={s.list}>
          {navLinks.map(link => (
            <li className={s.item} key={link.title}>
              <a href={`#${link.path}`} className={s.link}>{link.title}</a>
            </li>
          ))}

          <li className={s.item}>
            <DarkMode />
          </li>
        </ul>
      </nav>

      <div className={s.decor}></div>

      <div className={s.buttons}>
        <button className={s.btn}>Log in</button>
        <button className={`${s.btn} ${s.btn_border}`}>Sign up</button>
      </div>
    </header>
  );
};
