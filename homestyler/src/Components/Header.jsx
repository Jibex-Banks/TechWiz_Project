import { useState } from 'react';
import styles from './Header.module.css';
import logo from './img/Logo-removebg-preview.png';

const Header = () => {
  const [activeDesign, setActiveDesign] = useState('Living room');

  const showDesign = (designType) => {
    setActiveDesign(designType);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#">
          <img src={logo} alt="Logo" className={styles.logoImg} />
        </a>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="index.html">Home</a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#">Design</a>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownLi}>
                <a 
                  href="#" 
                  onClick={() => showDesign('Living room')} 
                  className={activeDesign === 'Living room' ? styles.active : ''}>
                  Living room
                </a>
              </li>
              <li className={styles.dropdownLi}>
                <a 
                  href="#" 
                  onClick={() => showDesign('Dining')} 
                  className={activeDesign === 'Dining' ? styles.active : ''}>
                  Dining
                </a>
              </li>
              <li className={styles.dropdownLi}>
                <a 
                  href="#" 
                  onClick={() => showDesign('Bedroom')} 
                  className={activeDesign === 'Bedroom' ? styles.active : ''}>
                  Bedroom
                </a>
              </li>
              <li className={styles.dropdownLi}>
                <a 
                  href="#" 
                  onClick={() => showDesign('lighting')} 
                  className={activeDesign === 'lighting' ? styles.active : ''}>
                  Lighting
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#">Gallery</a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#">Product</a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#">About Us</a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#">Contact Us</a>
          </li>
        </ul> 
      </nav>
      <div className={styles.icon}>
        <span className="material-icons">star</span>
        <span className="material-icons">search</span>
        </div>
    </header>
  );
};

export default Header;
