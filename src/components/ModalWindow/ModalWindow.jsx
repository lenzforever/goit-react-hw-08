import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import css from "./ModalWindow.module.css";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    height: "30%",
    width: "35%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

const ModalWindow = ({ modalIsOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(apiLogout());
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Logout Confirmation"
      style={customStyles}
    >
      <h3 className={css.title}>Confirm Logout</h3>
      <p className={css.message}>
        Are you sure you want to log out? You will lose access to your contacts.
      </p>
      <div className={css.buttonContainer}>
        <button
          type="button"
          onClick={closeModal}
          className={css.cancelButton}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className={css.logoutButton}
        >
          Log Out
        </button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
