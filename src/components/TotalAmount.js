import styles from "./TotalAmount.module.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const TotalAmount = () => {
  const { totalPrice } = useContext(CartContext);
  return (
    <section className={styles["total-amount"]}>
      <h2>Total Amount</h2>
      <p>${totalPrice}</p>
    </section>
  );
};

export default TotalAmount;
