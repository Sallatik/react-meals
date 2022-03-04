import styles from "./Modal.module.css";

const Modal = ({ children, className, onClose }) => (
  <div className={styles.backdrop} onClick={onClose}>
    <div className={className} onClick={(event) => event.stopPropagation()}>
      {children}
    </div>
  </div>
);

export default Modal;
