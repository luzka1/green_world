import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ItemProp } from "interfaces/App.interface";
import { useNavigate } from "react-router-dom";

export const ConfirmPayment = () => {
  const [cartItems, setCartItems] = useState<ItemProp[]>([]);
  const [totalAmount, setTotalAmount] = useState<string | null>("");
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems: ItemProp[] = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    );
    setCartItems(cartItems);

    setTotalAmount(localStorage.getItem("totalAmount"));
  }, []);

  const confirm = () => {
    navigate('/pay');
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Carrinho {">"} Forma de pagamento {">"} Confirmação de pagamento{" "}
      </p>

      <div className={styles.confirm}>
        <div className={styles.infos}>
          <h3 className="bold green">Informações do seu pedido</h3>
          <div className={`gray ${styles.details}`}>
            <div className={styles.titles}>
              <div style={{ width: "50%" }}>
                <p className="bold">Dados Pessoais</p>
                <p>Informações que serão inseridas na nota fiscal do pedido.</p>
              </div>
              <div style={{ width: "50%" }}>
                <p className="bold">Endereço de entrega</p>
                <p>Este é o endereço onde seu pedido será enviado.</p>
              </div>
            </div>
            <div className={styles.userDetails}>
              <div style={{ width: "50%" }}>
                <p className="bold">Lucas</p>
                <div>
                  <span className="bold">CPF/CNPJ: </span>
                  <span>123312123</span>
                </div>
                <div>
                  <span className="bold">Celular: </span>
                  <span>(11)912323231</span>
                </div>
                <div>
                  <span className="bold">E-mail: </span>
                  <span>exemplo@exemplo.com</span>
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <p className="bold">Rua exemplo</p>
                <div>
                  <span className="bold">Número: </span>
                  <span>0</span>
                </div>
                <div>
                  <span className="bold">Bairro: </span>
                  <span>Bairro exemplo</span>
                </div>
                <div>
                  <span className="bold">Estado: </span>
                  <span>São paulo</span>
                </div>
                <div>
                  <span className="bold">CEP: </span>
                  <span>04123413</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <h3 className="bold green">Lista de produtos</h3>
          <div className={styles.items}>
            {cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <div className={styles.innerCardItem}>
                  <div className={styles.cardPhoto}>
                    <img src={item.photo} alt={item.name} />
                  </div>
                  <div className={`${styles.cardName} bold`}>{item.name}</div>
                  <div className={styles.selector}>1Kg</div>
                  <div className={`${styles.cardValue} bold green`}>
                    R$ {item.promoValue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.totalAmount}>
          <div className={styles.innerTotal}>
            <h3 className="green bold">Valor da compra</h3>
            <div>
              <span className="gray">Valor dos Produtos</span>
              <span className="bold">R$ {totalAmount}</span>
            </div>
            <div>
              <span className="gray">Descontos</span>
              <span className="bold">R$ 0.00</span>
            </div>
            <div>
              <span className="gray">Frete</span>
              <span className="bold">R$ 0.00</span>
            </div>

            <div>
              <span className="green">Total</span>
              <span className="green bold">{totalAmount}</span>
            </div>

            <div className={styles.btns}>
              <button
                className="principalButton bold"
                onClick={() => confirm()}
              >
                Confirmar
              </button>
              <button
                className="secondButton bold"
                onClick={() => navigate(-1)}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
