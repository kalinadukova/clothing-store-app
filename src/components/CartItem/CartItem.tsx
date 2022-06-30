import { CartItemContainer, ItemDetails } from "./CartItem.styles.js";
import { CartItem } from "../../store/cart/cart.types.js";

import { FC } from "react";

type CartItemProps = {
  cartItem: CartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
