import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import Container from "../Container";
import Row from "../Row";
import NavLinks from "../NavLinks";

const NavBar = (props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [nav, setNav] = useState({
    isScrolledUp: false,
    isOnTop: true,
  });

  let prevScrollY = 0;
  const controlNavBar = () => {
    if (window.scrollY < prevScrollY && window.scrollY !== 0) {
      setNav((prevNav) => ({ ...prevNav, isScrolledUp: true, isOnTop: false }));
    } else if (window.scrollY === 0) {
      setNav((prevNav) => ({ ...prevNav, isScrolledUp: false, isOnTop: true }));
    } else {
      setNav((prevNav) => ({
        ...prevNav,
        isScrolledUp: false,
        isOnTop: false,
      }));
    }
    prevScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <div>
      <nav
        className={
          nav.isOnTop
            ? `${isMenuOpened ? styles.navBarMenuOpened : styles.navBar} ${styles.onTop}`
            : nav.isScrolledUp
            ? `${isMenuOpened ? styles.navBarMenuOpened : styles.navBar} ${styles.scrolledUp}`
            : `${isMenuOpened ? styles.navBarMenuOpened : styles.navBar}`
        }
      >
        <Container>
          <Row>
            <div className={styles.columnOne}>
              <Logo />
            </div>
            <div className={styles.columnTwo}>
              <NavLinks selectSection={props.selectSection} setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened}/>
            </div>
          </Row>
        </Container>
      </nav>
    </div>
  );
};

export default NavBar;
