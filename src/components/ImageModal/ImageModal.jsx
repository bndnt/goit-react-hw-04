import { BsJustify } from "react-icons/bs";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function ImageModal({
  modalIsOpen,
  closeModal,
  currentPicture,
}) {
  const customStyles = {
    content: {
      width: "content-fit",
      maxWidth: "80%",
      height: "auto",
      maxHeight: "90%",
      width: "fit-content",
      height: "100%",
      top: "50%",
      left: "50%",
      border: "none",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <img
        className={css.modalImg}
        src={currentPicture.url}
        alt={currentPicture.alt}
      />
    </Modal>
  );
}
