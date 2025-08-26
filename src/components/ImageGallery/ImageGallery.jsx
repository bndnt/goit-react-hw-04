import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ posts, openModal, setCurrentPicture }) {
  return (
    <div>
      <ul className={css.gallery}>
        {Array.isArray(posts) &&
          posts.map((post) => (
            <li key={post.id} className={css.galleryItem}>
              <ImageCard
                openModal={openModal}
                url={post.urls.small}
                alt={post.alt}
                setCurrentPicture={setCurrentPicture}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
