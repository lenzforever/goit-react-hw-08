import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={getLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
