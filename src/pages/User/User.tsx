import { CircleUser, Edit2 } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { scrollToTop } from "themes";
import { useNavigate } from "react-router-dom";
import { orders } from "data/orders";
import { useUserContext } from "hooks/useUserContext";

export const User = () => {
  const { user } = useUserContext();

  const navigate = useNavigate();

  const checkStatus = (status: string) => {
    let color = "";
    let text = "";

    if (status === "complete") {
      color = "var(--green)";
      text = "Pedido concluído";
    } else if (status === "pending") {
      color = "orange";
      text = "Pedido em processamento";
    } else {
      color = "red";
      text = "Pedido cancelado";
    }
    return { color, text };
  };

  const handleOrderDetails = (order: string) => {
    navigate(`/order/${order}`);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.userDetails}>
          <div className={styles.photo}>
            <CircleUser className="gray" />
          </div>
          <div className={styles.infos}>
            <h2 className="bold green">Bem vindo(a), {user?.nomeCompleto}</h2>
            <span>{user?.email}</span>
          </div>
        </div>
        <div className={styles.edit} onClick={() => navigate("/user/details")}>
          <Edit2 fill="var(--green)" className="green" />
          <span className="gray">Editar Perfil</span>
        </div>
      </div>
      <h2 className="green">SEUS PEDIDOS</h2>
      <div className={styles.orders}>
        {orders.map((item, index) => {
          const { color, text } = checkStatus(item.status);

          return (
            <>
              <div key={index} className={styles.item}>
                {item.items?.[0] && (
                  <div className={styles.productInfo}>
                    <img src={item.items[0].photo} alt={item.items[0].photo} />
                    <div>
                      <p className="bold">{item.items[0].name}</p>
                      <span className="bold">Quantidade: </span>
                      {item.items[0].qt}
                    </div>
                  </div>
                )}
                <div className={styles.productInfo}>
                  <span className="gray bold">Pedido:</span>
                  {item.order} - {item.orderDate}
                </div>
                <div className={styles.productInfo}>
                  <button
                    className="secondButton bold"
                    onClick={() => handleOrderDetails(item.order)}
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
              <div
                style={{
                  border: `2px solid ${color}`,
                  color: `${color}`,
                }}
                className={`${styles.status} bold`}
              >
                {text}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
