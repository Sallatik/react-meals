import CartItem from "./CartItem";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import styles from "./CartItemList.module.css";

const CartItemList = () => {
  const { items } = useContext(CartContext);
  return (
    <ul className={styles["cart-item-list"]}>
      {items.map(({ id, name, price, amount }) => (
        <CartItem key={id} id={id} name={name} price={price} amount={amount} />
      ))}
    </ul>
  );
};

export default CartItemList;
