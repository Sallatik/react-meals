import styles from "./Cart.module.css";
import CartControls from "./CartControls";
import Modal from "./Modal";
import TotalAmount from "./TotalAmount";
import CartItemList from "./CartItemList";

const Cart = ({ onClose }) => (
  <Modal className={styles.cart} onClose={onClose}>
    <CartItemList />
    <TotalAmount />
    <CartControls onClose={onClose} />
  </Modal>
);

export default Cart;
