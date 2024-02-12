import css from "./ImageCard.module.css";

const ImageCard = ({ src, desc, onClick }) => {
  return (
    <img src={src} alt={desc} onClick={onClick} className={css.image} />
  );
};

export default ImageCard;
