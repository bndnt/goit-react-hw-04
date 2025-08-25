import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ posts }) {
  return (
    <div>
      <ul className={css.gallery}>
        {Array.isArray(posts) &&
          posts.map((post) => (
            <li key={post.id} className={css.galleryItem}>
              <ImageCard url={post.urls.small} description={post.description} />
            </li>
          ))}
      </ul>
    </div>
  );
}
