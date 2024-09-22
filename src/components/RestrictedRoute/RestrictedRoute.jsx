import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children, redirectPath = "/contacts" }) => {
  const isUserLoggedIn = useSelector(selectAuthIsLoggedIn);
  
  return isUserLoggedIn ? <Navigate to={redirectPath} replace /> : children;
};

export default RestrictedRoute;
