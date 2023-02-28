import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Header.module.css";
import dreamerLogo from "../images/dreamerLogo12grey.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.logo}>
          <NavLink
            to="/"
            className={styles.logoLink}
            arial-label="logo Dreamer Tattoo"
          >
            <img
              src={dreamerLogo}
              alt="logo Dreamer Tattoo"
              width="394"
              height="58"
            />
          </NavLink>
        </div>
        <nav className={styles.wrapperNav}>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/" className={styles.btn}>
                studio
              </NavLink>
            </li>
            <li>
              <NavLink to="/tricopigmentation" className={styles.btn}>
                tricopigmentazione
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={styles.btn}>
                tatuaggi
              </NavLink>
            </li>
            <li>
              <NavLink to="/aftercare" className={styles.btn}>
                cura del tattoo
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={styles.btn}>
                contatti
              </NavLink>
            </li>
          </ul>
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
