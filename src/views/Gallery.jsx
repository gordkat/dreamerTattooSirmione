import styles from "./Gallery.module.css";
import GalleryList from "../components/GalleryList";
import ModalGalleryItem from "../components/ModalGalleryItem";
import { useState } from "react";
import { useEffect } from "react";

const oldInstaItems = [
  {
    mediaUrl:
      "https://scontent-mxp1-1.cdninstagram.com/v/t51.29350-15/331787520_164130459729572_8265532035077881215_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=PTO7PTRe2_oAX8UzGhV&_nc_ht=scontent-mxp1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfDuvjbJBvoBtmfG7URouU6azLGD83prwswHUUEPRcqlPQ&oe=641454E2",
  },
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [instaItems, setInstaItems] = useState([]);

  const userId = import.meta.env.VITE_USER_ID;
  const apiKey = import.meta.env.VITE_API_KEY;

  const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${apiKey}`;
  useEffect(() => {
    const getMediaItem = async (id) => {
      const mediaUrl = `https://graph.instagram.com/${id}?access_token=${apiKey}&fields=media_type,media_url,permalink`;
      const resMedia = await fetch(mediaUrl);
      const mediaItem = await resMedia.json();
      // console.log(mediaItem);
      return mediaItem;
    };

    const idList = async () => {
      if (!userId && !apiKey) {
        console.log("userId or apiKey is undefind");
        return;
      }

      const res = await fetch(instaUrl);
      const json = await res.json();
      // console.log(json);
      const imgList = [];
      if (json) {
        json.data.map(async (item) => {
          const imgItem = await getMediaItem(item.id);
          if (imgItem.media_type !== "IMAGE") return;
          console.log(imgItem);
          imgList.push(imgItem);
        });
        console.log(imgList);
      }
    };

    idList();
  }, [apiKey, userId, instaUrl]);

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
