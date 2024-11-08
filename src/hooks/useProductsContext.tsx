import ProductContext from "data/ProductContext";
import { useContext } from "react";

export const useProductsContext = () => useContext(ProductContext);