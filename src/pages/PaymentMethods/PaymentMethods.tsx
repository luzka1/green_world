import { useState } from "react";
import styles from "./styles.module.css";
import { Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PaymentMethods = () => {
  const [fill, setFill] = useState<boolean>(false);
  const [method, setMethod] = useState<"pix" | "creditcard" | ''>('');
  const totalAmount = localStorage.getItem("totalAmount");
  const navigate = useNavigate();

  const handleSelectMethod = (method: "pix" | "creditcard" | '') => {
    setFill(true);
    setMethod(method);
  };

  const confirmPayment = () => {
    
    if(method === 'pix' || method === 'creditcard'){
    localStorage.setItem("method", method.toString());
    navigate('/confirm-payment');
    }
    else{
      toast.error("Escolha uma forma de pagamento!");
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Carrinho {">"} Forma de pagamento </p>
      <div className={styles.payments}>
        <div className={styles.methods}>
          <div
            className={styles.method}
            onClick={() => handleSelectMethod("pix")}
            style={method === "pix" ? { border: "1px solid var(--blue)" } : {}}
          >
            <div>
              <Circle
                style={{ color: "#dadada" }}
                fill={fill && method === "pix" ? "var(--blue)" : "none"}
              />{" "}
              Pix
            </div>
          </div>
          <div
            className={styles.method}
            onClick={() => handleSelectMethod("creditcard")}
            style={
              method === "creditcard" ? { border: "1px solid var(--blue)" } : {}
            }
          >
            <div>
              <Circle
                style={{ color: "#dadada" }}
                fill={fill && method === "creditcard" ? "var(--blue)" : "none"}
              />{" "}
              Cartão de crédito
            </div>
          </div>
        </div>
        <div className={styles.totalAmount}>
          <div className={styles.innerTotal}>
            <h1 className="green bold">Valor da compra</h1>
            <div>
              <span className="gray">Valor dos Produtos</span>
              <span className="bold">R$ {totalAmount}</span>
            </div>
            <div className={styles.btns}>
              <button className="principalButton bold" onClick={() => confirmPayment()}>Confirmar</button>
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
