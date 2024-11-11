import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Clock, QrCode } from "lucide-react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { scrollToTop } from "themes";

export const Pay = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
  };

  function RandomColorGenerator() {
    let color = "#000000";
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    color = "#" + randomColor;

    return color;
  }

  useEffect(() => {
    scrollToTop();
  }, []);

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
            <span className="gray bold">
              AGORA SÓ FALTA REALIZAR O PAGAMENTO
            </span>
          </div>

          <div className={styles.infosPayment}>
            <div className={styles.qrCode}>
              <QrCode className={styles.qrCodeImage} />
              <span
                onClick={() => toast.success("Código copiado com sucesso!")}
                className="blue"
              >
                COPIAR CÓDIGO PIX
              </span>
            </div>
            <div className={styles.qrCodeInfos}>
              <div className={`${styles.expires} blue`}>
                <Clock />
                <div>
                  <p className="bold">Este QR code expira em 30 minutos.</p>
                  <span>
                    Ao realizar o pagamento você será informado por e-mail.
                  </span>
                </div>
              </div>
              <div className={styles.orderNumber}>
                <p className="gray">O número do seu pedido é:</p>
                <span className="gray bold">{RandomColorGenerator()}</span>
              </div>
              <p className="gray">
                Escaneie o QR Code ou copie o código PIX. Abra o APP da
                instituição que você possui o PIX cadastrado e realize o
                pagamento.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button
            className="principalButton bold"
            onClick={() => handleNavigate("shop")}
          >
            Continuar navegando
          </button>
          <button
            className="secondButton bold"
            onClick={() => handleNavigate("user")}
          >
            Ver meus pedidos
          </button>
        </div>
      </div>
    </div>
  );
};
