import { Suspense } from "react";

import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";

const Layout = ({ children }) => (
  <div className="layout-container">
    <AppBar />
    <Suspense fallback={<Loader className="loader" />}>{children}</Suspense>
  </div>
);

export default Layout;
