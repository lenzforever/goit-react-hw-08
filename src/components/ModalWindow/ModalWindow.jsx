import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import styles from "./ModalWindow.module.css";

Modal.setAppElement("#root");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    height: "35%",
    width: "40%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fdfdfd", 
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
};

const ModalWindow = ({ isOpen, toggleModal }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    toggleModal(false);
  };

  const handleLogout = () => {
    dispatch(apiLogout());
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Logout Confirmation"
      style={modalStyles}
    >
      <h3 className={styles.title}>Log Out Confirmation</h3>
      <p className={styles.message}>
        Are you sure you want to log out? You will lose access to your contacts.
      </p>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={closeModal}
          className={styles.cancelButton}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className={styles.logoutButton}
        >
          Log Out
        </button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
