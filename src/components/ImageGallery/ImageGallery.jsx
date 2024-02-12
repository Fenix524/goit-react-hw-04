import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imagesArr, viewImg }) => {
  return (
    <ul className={css.imageGallery}>
      {imagesArr.map((img) => {
        const { id, alt_description, urls } = img;
        return (
          <li key={id}>
            <ImageCard
              onClick={() => viewImg(img)}
              src={urls.small}
              desc={alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
