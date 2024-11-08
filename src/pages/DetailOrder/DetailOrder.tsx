import { orders } from "data/orders";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { scrollToTop } from "themes/animation";
import styles from "./styles.module.css";
import { toast } from "react-toastify";
import { CreditCard } from "lucide-react";
import { Pix } from "themes/Pix";

export const DetailOrder = () => {
  const { idOrder } = useParams();

  const order = orders.find((item) => item.order === idOrder);

  useEffect(() => {
    scrollToTop();
  }, []);

  if (!order) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <div className={styles.container}>
      <h2 className="green bold">Meus Pedidos</h2>

      <div className={styles.content}>
        <div className={styles.order}>
          <div className={styles.title}>
            <span className="bold gray">Pedido: </span>
            {order.order} - {order.orderDate}
          </div>
          <div className={styles.product}>
            <div className={styles.productsList}>
              {order.items?.map((item, index) => (
                <div key={index} className={styles.productInfo}>
                  <img src={item.photo} alt={item.photo} />
                  <div>
                    <p className="bold">{item.name}</p>
                    <span className="bold">Quantidade: </span>
                    {item.qt}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.productInfo}>
              Total:
              <span className="bold green subtitle">R${order.price}</span>
            </div>
          </div>

          <div className={styles.btns}>
            <button
              className="principalButton"
              onClick={() => toast.error("Recurso indisponível no momento")}
            >
              Ver rastreio detalhado
            </button>
            <button
              className="secondButton"
              onClick={() => toast.error("Recurso indisponível no momento")}
            >
              Ajuda
            </button>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsTitle}>
            <span className="bold subtitle">Lucas Gabriel dos Santos</span>
            <span>Rua exemplo, 0, Ap 04, São paulo, SP</span>
          </div>
          <div className={styles.method} style={{ color: "var(--gray02)" }}>
            {order.method === "pix" ? (
              <>
                <span>Pix</span>
                <Pix className="" />
              </>
            ) : (
              <>
                <span>Cartão de Crédito</span>
                <CreditCard />
              </>
            )}
          </div>

          <div className={styles.prices}>
            <div className={styles.value}>
              <span>Valor dos produtos</span>
              <span className="bold">R${order.price}</span>
            </div>
            <div className={styles.value}>
              <span>Descontos</span>
              <span className="bold">R$0,00</span>
            </div>
            <div className={styles.value}>
              <span>Frete</span>
              <span className="bold">R$0,00</span>
            </div>

            <div className={styles.totalValue}>
              <span className="bold green">Total</span>
              <span className="bold green title">R${order.price}</span>
            </div>
          </div>

          <button
              className="principalButton bold"
              onClick={() => toast.error("Recurso indisponível no momento")}
            >
              Avaliar produto
            </button>
        </div>
      </div>
    </div>
  );
};
