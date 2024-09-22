import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  const isUserLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>
      {isUserLoggedIn && (
        <NavLink to="/contacts" className={getLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
