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

const ImageModal = ({ modalContent, modalIsOpen, modalClose }) => {
  const { urls, alt_description } = modalContent;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={modalClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img className={css.img} src={urls.regular} alt={alt_description} />
      </Modal>
    </div>
  );
};

export default ImageModal;
