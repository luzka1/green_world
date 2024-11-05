import { ItemProp } from "interfaces/App.interface";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { items } from "data/products";
import { ProductShop } from "components/ProductShop";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "themes";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<ItemProp[]>([]);
  const navigate = useNavigate();

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

  const totalAmount = Object.values(cartItems).reduce(
    (acc, valor) => acc + valor.promoValue,
    0
  );

  const handleFinish = () => {
    localStorage.setItem("totalAmount", totalAmount.toFixed(2).toString());
    navigate("/payment-method");
  };

  useEffect(() => {
    scrollToTop();
  }, []);


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
                    R$ {item.promoValue}
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
            <div className={styles.totalAmount}>
              <div>
                <span className="gray">Valor dos Produtos</span>
                <span className="gray bold">R$ {totalAmount.toFixed(2)}</span>
              </div>
              <div>
                <span className="gray">Valor do frete</span>
                <span className="gray bold">R$ 0,00</span>
              </div>
              <div>
                <span className="">Total</span>
                <span className="bold">R$ {totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className={styles.infos}>
              <h2 className="green">Entrega</h2>

              <div>
                <span className="gray bold">Endereço principal</span>
                <span className="gray">Rua exemplo</span>
                <span className="gray">
                  Número 0, Ap 04 I CEP 0000-000 São Paulo SP
                </span>
              </div>

              <div>
                {cartItems.length > 0 ? (
                  <button
                    className="principalButton bold"
                    type="button"
                    onClick={() => handleFinish()}
                  >
                    Continuar a compra
                  </button>
                ) : (
                  <button
                    style={{
                      backgroundColor: "var(--gray01)",
                      cursor: "not-allowed",
                    }}
                    className="principalButton bold"
                    type="button"
                  >
                    Continuar a compra
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};
