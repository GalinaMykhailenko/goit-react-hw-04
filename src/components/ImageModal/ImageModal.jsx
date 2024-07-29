import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

Modal.setAppElement("#root");
const ImageModal = ({ openModal, closeModal, modalUrls, alt }) => {
  console.log("Modal URL:", modalUrls);
  console.log("Modal Alt:", alt);

  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={modalUrls} alt={alt} />
        <p>{alt}</p>
      </Modal>
    </div>
  );
};

export default ImageModal;
