import styles from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../context/CartContext";
import { useContext, useState, useEffect } from "react";

const getButtonClasses = (animated) => {
  const animatedPostfix = animated ? " " + styles.bump : "";
  return styles["cart-button"] + animatedPostfix;
};

const setTimeoutWithCleanup = (callback, ms) => {
  const timeout = setTimeout(callback, ms);
  return () => clearTimeout(timeout);
};

const CartButton = ({ onClick }) => {
  const [animated, setAnimated] = useState(false);
  const { totalAmount } = useContext(CartContext);

  useEffect(() => {
    if (totalAmount > 0) {
      setAnimated(true);
      return setTimeoutWithCleanup(() => setAnimated(false), 300);
    }
  }, [totalAmount]);

  const buttonClasses = getButtonClasses(animated);
  return (
    <button className={buttonClasses} onClick={onClick}>
      <CartIcon />
      <p>Your Cart</p>
      <p className={styles["cart-count"]}>{totalAmount}</p>
    </button>
  );
};

export default CartButton;
