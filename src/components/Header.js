import CartButton from "./CartButton";
import styles from "./Header.module.css";

const Header = ({ onOpenCart }) => (
  <header className={styles["page-header"]}>
    <h1>ReactMeals</h1>
    <CartButton onClick={onOpenCart} />
  </header>
);

export default Header;
