import styles from "./Gallery.module.css";
import GalleryList from "../components/GalleryList";
import ModalGalleryItem from "../components/ModalGalleryItem";
import { useState } from "react";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main className={styles.containerGallery}>
      <h1 className={styles.titleGallery}>tatuaggi</h1>
      <GalleryList onModal={handleShowModal} />
      {showModal && <ModalGalleryItem onCloseModal={handleCloseModal} />}
    </main>
  );
};

export default Gallery;
