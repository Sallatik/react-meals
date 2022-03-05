import styles from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ id, name, price, amount }) => {
  const { incrementMealAmount, decrementMealAmount } = useContext(CartContext);
  return (
    <li className={styles["cart-item"]}>
      <section className={styles["item-info"]}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>${price}</p>
      </section>
      <p className={styles.amount}>&times;{amount}</p>
      <button className={styles.button} onClick={() => decrementMealAmount(id)}>
        -
      </button>
      <button className={styles.button} onClick={() => incrementMealAmount(id)}>
        +
      </button>
    </li>
  );
};

export default CartItem;
