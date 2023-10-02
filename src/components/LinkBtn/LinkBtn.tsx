import React from 'react';
import s from './LinkBtn.module.scss';

interface Props {
  children: React.ReactNode,
}

export const LinkBtn: React.FC<Props> = ({ children }) => {
  return (
    <span className={s.btn}>
      {children}
    </span>
  );
};
