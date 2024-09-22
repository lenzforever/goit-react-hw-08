import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => (
  <div className={css.navContainer}>
    <NavLink to="/register" className={({ isActive }) => 
      isActive ? `${css.navLink} ${css.active}` : css.navLink
    }>
      Регистрация
    </NavLink>
    <NavLink to="/login" className={({ isActive }) => 
      isActive ? `${css.navLink} ${css.active}` : css.navLink
    }>
      Войти
    </NavLink>
  </div>
);

export default AuthNav;
