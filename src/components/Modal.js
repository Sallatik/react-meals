import styles from "./Modal.module.css";
import Portal from "./Portal";

const notPropagateToParent = (event) => event.stopPropagation();

const Modal = ({ children, className, onClose }) => (
  <Portal containerId="modal-root">
    <div className={styles.backdrop} onClick={onClose}>
      <div className={className} onClick={notPropagateToParent}>
        {children}
      </div>
    </div>
  </Portal>
);

export default Modal;
