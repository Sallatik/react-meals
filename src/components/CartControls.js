import styles from "./CartControls.module.css";

const CartControls = ({ onClose }) => (
  <section className={styles["cart-controls"]}>
    <button className={styles.close} onClick={onClose}>
      Close
    </button>
    <button className={styles.order}>Order</button>
  </section>
);

export default CartControls;
