import { Link } from "react-router-dom";

import { CategoryPreviewContainer } from "./CategoryPreview.styles";

import ProductCard from "../ProductCard/ProductCard";

import { CategoryItem } from "../../store/categories/category.types";

import { FC } from "react";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
