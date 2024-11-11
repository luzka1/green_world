import { items } from "data/products";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import ProductInfo from "components/ProductInfo/ProductInfo";
import { ProductShop } from "components/ProductShop";
import { useEffect } from "react";
import { scrollToTop } from "themes";
import { useProductsContext } from "hooks/useProductsContext";

export const DetailProduct = () => {
  const { idProduct } = useParams();
  const { products, getProducts } = useProductsContext();

  const produto = products.find((item) => item.id === idProduct);
  
  useEffect(() => {
    scrollToTop();
    getProducts();
  },[])

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <section className={styles.container}>
      <ProductInfo produto={produto} />
      <div className={styles.relatedProducts}>
        <h1 className="bold green">Produtos relacionados</h1>

        <div className={styles.related}>
          {products.slice(0, 4).map((item, id) => (
            <div
              className={`product-individual ${styles.relatedUnique}`}
              key={id}
            >
              <ProductShop item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
