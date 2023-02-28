import styles from "./GalleryItem.module.css";
// import shop1 from "../images/shop1.jpg";

const GalleryItem = ({ photo, onModal }) => {
  return (
    <li className={styles.photoCard}>
      <img
        src={photo.url}
        alt={photo.alt}
        className={styles.photoItem}
        // width="200"
        onClick={onModal}
      />
    </li>
  );
};

export default GalleryItem;
