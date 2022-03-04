import styles from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../context/CartContext";
import { useContext } from "react";

const CartButton = ({ onClick }) => {
  const { totalAmount } = useContext(CartContext);
  return (
    <button className={styles["cart-button"]} onClick={onClick}>
      <CartIcon />
      <p>Your Cart</p>
      <p className={styles["cart-count"]}>{totalAmount}</p>
    </button>
  );
};

export default CartButton;
