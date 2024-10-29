import React from "react";
import styles from "./styles.module.css";

const PaymentMethods = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Carrinho {">"} Forma de pagamento </p>
      <div className={styles.payments}>
        <div className={styles.methods}>
          <div className={styles.method}>Pix</div>
          <div className={styles.method}>Cartão de crédito</div>
        </div>
        <div className={styles.totalAmount}>
          <h1 className="green bold">Valor da compra</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
