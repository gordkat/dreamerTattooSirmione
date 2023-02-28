import { createPortal } from "react-dom";
import styles from "./ModalGalleryItem.module.css";
import shop1 from "../images/shop1.jpg";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

const ModalGalleryItem = ({ onCloseModal }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        console.log(event.code === "Escape");
        onCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={shop1} alt="big photo" />
      </div>
    </div>,
    modalRoot
  );
};

export default ModalGalleryItem;
