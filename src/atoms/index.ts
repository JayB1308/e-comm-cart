import { atom } from "recoil";

export const currentProductsState = atom({
  key: "currentProductsState",
  default: [],
});

export const colorFilterState = atom({
  key: "colorFilterState",
  default: "Color",
});

export const categoryFilterState = atom({
  key: "categoryFilterState",
  default: "Category",
});

export const SearchState = atom({
  key: "SearchState",
  default: "",
});
