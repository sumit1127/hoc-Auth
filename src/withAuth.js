import { useState } from "react";
import Login from "./Login";

const withAuth = (Component) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLogin, setIsLogin] = useState("logout");

  const toggle = () => {
    setIsAuthenticated((prev) => !prev);
    setIsLogin((prev) => (prev == "logout" ? "login" : "logout"));
  };
  return function (props) {
    if (isAuthenticated) {
      return <Component {...props} isLogin={isLogin} toggle={toggle} />;
    } else {
      return <Login isLogin={isLogin} toggle={toggle} />;
    }
  };
};

export default withAuth;
