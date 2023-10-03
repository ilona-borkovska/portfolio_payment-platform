import React from "react";
import Link from "next/link";
import s from './Footer.module.scss';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  { id: 1, path: "https://linkedin.com/", icon: faLinkedinIn},
  { id: 2, path: "https://twitter.com/", icon: faTwitter},
  { id: 3, path: "https://www.facebook.com/", icon: faFacebook},
  { id: 4, path: "https://www.instagram.com/", icon: faInstagram},
];

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <nav>
        <ul className={s.list}>
          {links.map(link => (
            <li key={link.id} className={s.item}>
              <Link href={link.path} className={s.link}>
                <FontAwesomeIcon icon={link.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
};

export default Footer;