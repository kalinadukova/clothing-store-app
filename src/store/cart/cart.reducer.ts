import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { setIsCartOpen, setCartItems } from "./cart.action";
import { AnyAction } from "redux";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITAL_STATE,
  action: AnyAction
): CartState => {
  // const { type, payload } = action;

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  return state;

  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };
  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //     return {
  //       ...state,
  //       isCartOpen: payload,
  //     };
  //   default:
  //     return state;
  // }
};
