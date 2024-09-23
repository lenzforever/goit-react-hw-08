import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));

import "./App.css";

import Layout from "./Layout";
import { selectAuthIsRefreshing, selectAuthIsLoggedIn } from "./redux/auth/selectors";
import { apiRefreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const isUserLoggedIn = useSelector(selectAuthIsLoggedIn);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <div className="loading-container">
        <strong>Обновление пользователя...</strong>
      </div>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
