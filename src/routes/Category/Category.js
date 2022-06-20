import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import { CategoryContainer, CategoryTitle } from "./Category.styles.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
