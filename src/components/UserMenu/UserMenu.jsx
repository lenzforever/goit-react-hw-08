import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";

import ModalWindow from "../ModalWindow/ModalWindow";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const openModal = () => setModalOpen(true);
  const handleLogout = () => dispatch(apiLogout());

  return (
    <div className={styles.userMenu}>
      <div className={styles.userInfo}>
        <h3 className={styles.userName}>{user.name}</h3>
        <p className={styles.userEmail}>{user.email}</p>
      </div>

      <button
        type="button"
        className={styles.logoutButton}
        onClick={openModal}
      >
        Log Out
      </button>
      <ModalWindow
        modalIsOpen={isModalOpen}
        setIsOpen={setModalOpen}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default UserMenu;
