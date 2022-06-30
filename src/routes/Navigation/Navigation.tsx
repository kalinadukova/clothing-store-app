import { Outlet } from "react-router-dom";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { signOutStart } from "../../store/user/user.action";

import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
} from "./Navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
