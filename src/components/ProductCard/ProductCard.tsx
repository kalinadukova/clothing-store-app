import { useDispatch, useSelector } from "react-redux/es/exports.js";

import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.action";

import { Footer, ProductCardContainer } from "./ProductCard.styles";

import Button, { buttonTypeClasses } from "../Button/Button";

import { CategoryItem } from "../../store/categories/category.types";

import { FC } from "react";

type ProductsCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductsCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={buttonTypeClasses.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
