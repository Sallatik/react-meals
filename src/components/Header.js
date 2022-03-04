import CartButton from "./CartButton";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles["page-header"]}>
    <h1>ReactMeals</h1>
    <CartButton />
  </header>
);

export default Header;
