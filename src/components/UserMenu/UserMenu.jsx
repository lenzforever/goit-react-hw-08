import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";

import css from "./UserMenu.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";

const UserMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function handleLogout() {
    dispatch(apiLogout());
  }

  return (
    <div className={css.userMenu}>
      <div className={css.userInfo}>
        <h3 className={css.userName}>{user.name}</h3>
        <p className={css.userEmail}>{user.email}</p>
      </div>

      <button
        type="button"
        className={css.logoutButton}
        onClick={openModal}
      >
        Log Out
      </button>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default UserMenu;
