import { ItemProp } from "interfaces/App.interface";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<ItemProp[]>([]);

  useEffect(() => {
    const cartItems: ItemProp[] = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    );
    setCartItems(cartItems);
  }, []);

  return (
    <div className={styles.container}>
      <p>Carrinho</p>

      <div>
        <div>
          {cartItems.length > 0 ? cartItems.map((item, index) => (
            <p key={index}>{item.name} {item.promoValue}</p>
          )) : <p>Nenhum produto no carrinho!</p>}
        </div>

        <div>
            <div>
                <h2 className="green">Resumo da compra</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
