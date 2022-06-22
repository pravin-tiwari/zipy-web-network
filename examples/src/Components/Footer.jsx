import React from 'react';

import Styles from './Footer.module.scss';

const Footer = () => (
  <footer className={Styles.footer}>
    <span>
      For more information please check
    </span>
    <a
      className={Styles.link}
      href="//github.com/saucelabs/zipy-web-network"
      rel="noopener noreferrer"
      target="_blank"
    >
      Github
    </a>
  </footer>
);

export default Footer;
