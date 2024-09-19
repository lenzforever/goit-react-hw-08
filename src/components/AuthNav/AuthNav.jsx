import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.navContainer}>
      <NavLink to="/register" className={({ isActive }) => 
        isActive ? `${css.navLink} ${css.active}` : css.navLink
      }>
        Registration
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => 
        isActive ? `${css.navLink} ${css.active}` : css.navLink
      }>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
