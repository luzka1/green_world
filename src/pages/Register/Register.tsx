import { useNavigate } from "react-router-dom";
import { Button, Footer, Header } from "../../components";
import styles from "./styles.module.css";

export const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <div>
      <div style={{ height: "100px" }}>
        <Header />
      </div>
      <section id={styles.area}>
        <div id={styles.formArea}>
          <div id={styles.innerFormArea}>
            <div className={styles.title}>
              <p>Fazer Cadastro</p>
              <p>Que tal criar uma conta para aproveitar nossos produtos?</p>
            </div>
            <form>
              <input
                className="second-input-enter-data"
                placeholder="Primeiro nome"
                type="text"
              ></input>
              <input
                className="second-input-enter-data"
                placeholder="Sobrenome"
                type="text"
              ></input>
              <input
                className="second-input-enter-data"
                placeholder="Data de nascimento"
                type="date"
              ></input>
              <input
                className="second-input-enter-data"
                placeholder="CPF"
                type="number"
              ></input>
              <input
                className="second-input-enter-data"
                placeholder="Email"
                type="email"
              ></input>
              <input
                className="second-input-enter-data"
                placeholder="Senha"
                type="password"
              ></input>
              <input
                className="second-input-enter-data"
                placeholder="Confirme sua senha"
                type="password"
              ></input>
              <Button text="Cadastrar" type="submit" onClick={handleClick} />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
