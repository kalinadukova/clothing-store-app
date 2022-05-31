import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/sign-in">
            Sign In
          </Link>
          <Link className="nav-links" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
