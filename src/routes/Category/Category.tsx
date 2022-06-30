import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import { CategoryContainer, CategoryTitle } from "./Category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
