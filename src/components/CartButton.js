import styles from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../context/CartContext";
import { useContext } from "react";

const CartButton = () => {
  const { mealCount } = useContext(CartContext);
  return (
    <button className={styles["cart-button"]}>
      <CartIcon />
      <p>Your Cart</p>
      <p className={styles["cart-count"]}>{mealCount}</p>
    </button>
  );
};

export default CartButton;
