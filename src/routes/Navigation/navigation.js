import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation ">
        <Link className="logo-container" to="/">
          My Articles
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/About">
            ABOUT
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
