import styles from "./Cart.module.css";
import Modal from "./Modal";

const Cart = ({ onClose }) => (
  <Modal className={styles.cart} onClose={onClose}>
    Hello, World!
  </Modal>
);

export default Cart;
