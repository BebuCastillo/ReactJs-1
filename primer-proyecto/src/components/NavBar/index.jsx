import styles from "./navbar.module.css";
import { BsCart4 } from 'react-icons/bs';


const NavBar = () => {
  return  (
    <nav className={styles.container}>
      <p>Historia</p>
      <p>Menu</p>
      <p>Bebidas</p>
      <BsCart4/>
      <p>4</p>
  </nav>
  );
};

export default NavBar;