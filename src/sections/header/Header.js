import styles from "./Header.module.css";
import NavBar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";

const Header = (props) => {
  

  const [open, setOpen] = useState(true);
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  let prevScrollY = 0;

  const controlNavBar = () => {
    if (window.scrollY > prevScrollY && window.scrollY > 100) {
      setIsScrolledUp(false);
    } else if (window.scrollY < prevScrollY && window.scrollY > 100) {
      if (open) {
        setIsScrolledUp(true);
      } else {
        setIsScrolledUp(false);
      }
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
    <>
      <header
        className={
          !isScrolledUp && open
            ? styles.header
            : `${styles.header} ${styles.menu}`
        }
      >
        <NavBar
          open={open}
          setOpen={setOpen}

          selectSection={props.selectSection}
        />
      </header>
    </>
  );
};

export default Header;
