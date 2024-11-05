import { items } from "data/products";
import styles from "./styles.module.css";
import { ProductShop } from "components/ProductShop";
import { useEffect } from "react";
import { scrollToTop } from "themes";

export const Search = () => {
  const searchedProduct = "Maçã";

  useEffect(() => {
    scrollToTop();
  }, []);


  return (
    <section className={styles.shopSection}>
      <div className={styles.title}>
        <div className="green bold subtitle">
          Resultados por: {searchedProduct}
        </div>
        <div className={styles.filter}>
          Ordenar: <button type="button">Maior preço</button>
        </div>
      </div>

      <div className={styles.searchArea}>
        <div className={styles.priceFilter}>
          <div className={styles.titleFilter}>
            <p className="green bold">Preço</p>
            <p>Intervalo de preço</p>
          </div>
          <div className={styles.priceRange}>
            
            <input type="range" />
            <div className={styles.priceValues}><p>R$1.99</p><p>R$100.00</p></div>

            <div className={styles.priceInputs}>
              <input type="number" placeholder="Min" />
              <input type="number" placeholder="Max"/>
            </div>
          </div>
        </div>
        <div className={styles.searchResults}>
          {items.map((item, id) => (
            <div
              className={`product-individual`}
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
