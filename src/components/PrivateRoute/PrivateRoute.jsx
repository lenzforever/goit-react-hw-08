import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectPath = "/" }) => {
  const isUserLoggedIn = useSelector(selectAuthIsLoggedIn);
  
  return isUserLoggedIn ? children : <Navigate to={redirectPath} replace />;
};

export default PrivateRoute;
