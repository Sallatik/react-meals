import styles from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = () => (
  <button className={styles["cart-button"]}>
    <CartIcon />
    <p>Your Cart</p>
    <p className={styles["cart-count"]}>0</p>
  </button>
);

export default CartButton;
