import { CircleAlert, CircleUser, Edit2 } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { scrollToTop } from "themes";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "hooks/useUserContext";

export const User = () => {
  const { user, orders, getOrderData, logout } = useUserContext();
  const token = localStorage.getItem("token");

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
    getOrderData(token);
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
        <div className="red bold" onClick={() => logout()}>Sair da conta</div>
      </div>
      <h2 className="green">SEUS PEDIDOS</h2>
      <div className={styles.orders}>
        {orders ? (
          orders?.map((item: any, index: number) => {
            const { color, text } = checkStatus(item.status);

            return (
              <>
                <div key={index} className={styles.item}>
                  {item.items?.[0] && (
                    <div className={styles.productInfo}>
                      <img
                        src={item.items[0].photoUrl}
                        alt={item.items[0].photo}
                      />
                      <div>
                        <p className="bold">{item.items[0].item_name}</p>
                        <span className="bold">Quantidade: </span>
                        {item.items[0].quantity} Kg
                      </div>
                    </div>
                  )}
                  <div className={styles.productInfo}>
                    <span className="gray bold">Pedido:</span>
                    {item.order_number} - {item.order_date}
                  </div>
                  <div className={styles.productInfo}>
                    <button
                      className="secondButton bold"
                      onClick={() => handleOrderDetails(item.order_number)}
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
          })
        ) : (
          <div className="error">
              <CircleAlert className="red" /> <p>Nenhum produto no carrinho!</p>
          </div>
        )}
      </div>
    </div>
  );
};
