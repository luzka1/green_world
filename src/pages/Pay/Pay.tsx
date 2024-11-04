import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const Pay = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Carrinho {">"} Forma de pagamento {">"} Confirmação de pagamento {">"}{" "}
        Concluir
      </p>

      <div className={styles.content}>
        <div className={styles.confirmation}>
            <div className={styles.confirmTitle}>
                <h2 className="bold green">PEDIDO REALIZADO COM SUCESSO</h2>
                <span className="gray bold">AGORA SÓ FALTA REALIZAR O PAGAMENTO</span>
            </div>
        </div>
        <div className={styles.btns}>
          <button className="principalButton bold" onClick={() => handleNavigate("shop")}>
            Continuar navegando
          </button>
          <button className="secondButton bold" onClick={() => handleNavigate("user")}>
            Ver meus pedidos
          </button>
        </div>
      </div>
    </div>
  );
};
