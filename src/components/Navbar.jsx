import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__list-item">
          <a className="nav__link nav__link_email" href="mailto:skovakina@gmail.com" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li className="nav__list-item">
          <a className="nav__link nav__link_github" href="https://github.com/skovakina" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li className="nav__list-item">
          <a className="nav__link nav__link_linkedin" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li className="nav__list-item nav__list-item_grow">
          <a
            className="nav__button"
            href="https://drive.google.com/file/d/18Lz2DjQT8HYckerUKHlnsv07Pfzt3m5e/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/images/download-cloud.png" alt="Download Resume" />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
