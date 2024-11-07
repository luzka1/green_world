import { toast } from "react-toastify";
import styles from "./styles.module.css";

export const UserDetails = () => {
  const data = new Date();

  return (
    <div className={styles.container}>
      <h2 className="bold green">Meus dados</h2>

      <div className={styles.content}>
        <div className={styles.basicData}>
          <h3 className="bold green">Dados Básicos</h3>

          <div className={styles.form}>
            <div className={styles.input}>
              <label>Nome completo:</label>
              <input
                type="text"
                readOnly
                disabled
                placeholder="Lucas Gabriel dos Santos"
              />
            </div>
            <div className={styles.input}>
              <label>Celular:</label>
              <input
                type="text"
                readOnly
                disabled
                placeholder="(11)97519-3251"
              />
            </div>
            <div className={styles.input}>
              <label>E-mail:</label>
              <input
                type="text"
                readOnly
                disabled
                placeholder="exemplo@exemplo.com"
              />
            </div>
            <div className={styles.input}>
              <label>CPF</label>
              <input
                type="text"
                readOnly
                disabled
                placeholder="849.152.513-18"
              />
            </div>
            <div className={styles.input}>
              <label>Data de nascimento</label>
              <input type="text" readOnly disabled placeholder="15/01/2003" />
            </div>
            <div className={styles.btns}>
              <button
                className="secondButton bold"
                onClick={() => toast.error("Indisponível no momento!")}
              >
                Excluir minha conta
              </button>
              <button
                className="principalButton bold"
                onClick={() => toast.success("Alterações salvas com sucesso!")}
              >
                Salvar alterações
              </button>
            </div>
          </div>
        </div>

        <div className={styles.addresses}>
          <h3 className="bold green">Endereços</h3>

          <div className={styles.items}>
            <div className={styles.address}>
              <h3>Endereço principal</h3>
              <div>
                <p>Rua exemplo</p>

                <span>Numero: 0</span>
                <span>Bairro: Bairro de exemplo</span>
                <span>Cidade: São Paulo</span>
                <span>Cep: 12345-2325</span>
                <span>Complemento: Ap 04</span>
              </div>
              <div
                className={styles.editBtn}
                onClick={() => toast.error("Indisponível no momento!")}
              >
                Editar
              </div>
            </div>
          </div>
          <button
            className="principalButton"
            onClick={() => toast.error("Indisponível no momento!")}
          >
            Cadastrar novo endereço
          </button>
        </div>
      </div>
    </div>
  );
};
