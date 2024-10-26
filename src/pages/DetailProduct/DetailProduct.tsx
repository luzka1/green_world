import { items } from "data/products";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import ProductInfo from "components/ProductInfo/ProductInfo";
import { ProductShop } from "components/ProductShop";
import { useEffect } from "react";
import { scrollToTop } from "themes";

const DetailProduct = () => {
  const { idProduct } = useParams();

  const produto = items.find((item) => item.id === idProduct);

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className={styles.container}>
      <ProductInfo produto={produto} />
      <div className={styles.relatedProducts}>
        <h1 className="bold green">Produtos relacionados</h1>

        <div className={styles.related}>
          {items.slice(0, 4).map((item, id) => (
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

export default DetailProduct;
