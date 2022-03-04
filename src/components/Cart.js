import styles from "./Cart.module.css";
import Modal from "./Modal";
import TotalAmount from "./TotalAmount";

const Cart = ({ onClose }) => (
  <Modal className={styles.cart} onClose={onClose}>
    <TotalAmount />
  </Modal>
);

export default Cart;
