import { CircleUser, Edit2 } from "lucide-react";
import styles from "./styles.module.css";

export const User = () => {
  const fullName = "Lucas Gabriel dos Santos";
  const email = "lucrades@gmail.com";

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
      status: "pending",
    },
    {
      photo:
        "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
      name: "Kiwi",
      qt: "1kg",
      order: " 39140344 - 17/05/2024",
      status: "pending",
    },
  ];

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
        <div className={styles.edit}>
          <Edit2 fill="var(--green)" className="green" />
          <span className="gray">Editar Perfil</span>
        </div>
      </div>
      <h2 className="green">SEUS PEDIDOS</h2>
      <div className={styles.orders}>
        {items.map((item, index) => (
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
          <div style={{border: "1px solid var(--green)"}} className={styles.status}>Pedido concluído</div></>
        ))}
      </div>
    </div>
  );
};
