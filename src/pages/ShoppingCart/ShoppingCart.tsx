import { ItemProp } from "interfaces/App.interface";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<ItemProp[]>([]);

  useEffect(() => {
    const cartItems: ItemProp[] = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    );
    setCartItems(cartItems);
  }, []);

  const handleRemoveItem = (item: number) => {
    const updatedCartItems = cartItems.filter(
      (cardItem, index) => index !== item
    );

    setCartItems(updatedCartItems);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className={styles.container}>
      <p>Carrinho</p>

      <div className={styles.innerContainer}>
        <div className={styles.cardsGroup}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <div className={styles.innerCardItem}>
                  <div className={styles.cardPhoto}>
                    <img src={item.photo} alt={item.name} />
                  </div>
                  <div className={`${styles.cardName} bold`}>{item.name}</div>
                  <div className={styles.cardWeigh}>
                    <span className="gray">Quantidade *KG</span>
                    <div className={styles.selector}>
                      <Minus /> 1Kg <Plus className="blue" />
                    </div>
                    <span
                      style={{ cursor: "pointer" }}
                      className="red bold"
                      onClick={() => handleRemoveItem(index)}
                    >
                      REMOVER
                    </span>
                  </div>
                  <div className={`${styles.cardValue} bold green`}>
                    {item.promoValue}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum produto no carrinho!</p>
          )}
        </div>

        <div className={styles.resume}>
          <div className={styles.innerResume}>
            <h2 className="green">Resumo da compra</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
