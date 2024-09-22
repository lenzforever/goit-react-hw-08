import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import toast from "react-hot-toast";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    toast.success("Контакт успешно удален", { duration: 1500 });
  };

  return (
    <li className={css.contactWrapper}>
      <div className={css.wrapper}>
        <FaUser />
        <h3>{name}</h3>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={handleDeleteContact}
      >
        Удалить
      </button>
    </li>
  );
};

export default Contact;
