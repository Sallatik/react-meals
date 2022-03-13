import styles from "./CartControls.module.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartControls = ({ onClose }) => {
  const { items } = useContext(CartContext);
  const showOrderButton = items.length > 0;
  return (
    <section className={styles["cart-controls"]}>
      <button className={styles.close} onClick={onClose}>
        Close
      </button>
      {showOrderButton && <button className={styles.order}>Order</button>}
    </section>
  );
};

export default CartControls;
