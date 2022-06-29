export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAIL = "category/FETCH_CATEGORIES_FAIL",
}

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type CategoryMap = {
  [key: string]: CategoryItem[]; //we don't know what the key will beq we only know it's going to be a string
};
