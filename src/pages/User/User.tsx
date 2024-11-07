import { CircleUser, Edit2 } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { scrollToTop } from "themes";
import { useNavigate } from "react-router-dom";

const items = [
  {
    photo:
      "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
    name: "Kiwi",
    qt: "1kg",
    order: " 39140344 - 17/05/2024",
    status: "pending",
  },
  {
    photo:
      "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
    name: "Kiwi",
    qt: "1kg",
    order: " 39140344 - 17/05/2024",
    status: "complete",
  },
  {
    photo:
      "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
    name: "Kiwi",
    qt: "1kg",
    order: " 39140344 - 17/05/2024",
    status: "error",
  },
];

export const User = () => {
  const fullName = "Lucas Gabriel dos Santos";
  const email = "lucrades@gmail.com";
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
            <h2 className="bold green">Bem vindo(a), {fullName}</h2>
            <span>{email}</span>
          </div>
        </div>
        <div className={styles.edit} onClick={() => navigate('/user/details')}>
          <Edit2 fill="var(--green)" className="green" />
          <span className="gray">Editar Perfil</span>
        </div>
      </div>
      <h2 className="green">SEUS PEDIDOS</h2>
      <div className={styles.orders}>
        {items.map((item, index) => {
          const { color, text } = checkStatus(item.status);
          return (
            <>
              <div key={index} className={styles.item}>
                <div className={styles.productInfo}>
                  <img src={item.photo} alt={item.photo} />
                  <div>
                    <p className="bold">{item.name}</p>
                    <span className="bold">Quantidade: </span>
                    {item.qt}
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <span className="gray bold">Pedido:</span>
                  {item.order}
                </div>
                <div className={styles.productInfo}>
                  <button className="secondButton bold">Ver detalhes</button>
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
