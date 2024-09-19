import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      <div className={css.authSection}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
