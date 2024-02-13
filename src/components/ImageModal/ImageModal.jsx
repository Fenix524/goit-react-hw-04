import css from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ modalContent, modalClose }) => {
  const { urls, alt_description } = modalContent;
  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={modalClose}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById("root")} // Встановлюємо елемент додатку для react-modal
      >
        <img className={css.img} src={urls.regular} alt={alt_description} />
      </Modal>
    </div>
  );
};

export default ImageModal;
