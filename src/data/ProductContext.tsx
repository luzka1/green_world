import { createContext, useState } from "react";
import { IProductContext, ItemProp } from "../interfaces/App.interface";
import { api } from "api/api";
import { toast } from "react-toastify";

const ProductContext = createContext<IProductContext>({} as IProductContext);

export function ProductProvider(props: any) {
  const [products, setProducts] = useState<ItemProp[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      toast.error("Erro ao resgatar dados!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loading,
        getProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
