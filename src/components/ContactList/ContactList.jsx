import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.listWrapper}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        ))
      ) : (
        <p className={css.noContacts}>Контакты не найдены</p>
      )}
    </ul>
  );
};

export default ContactList;
