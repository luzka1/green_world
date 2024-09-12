import styles from "./styles.module.css";
import { Button } from "../../components";
import emailIcon from "../../assets/images/ic_baseline-email (1).svg";
import passwordIcon from "../../assets/images/ic_baseline-email (2).svg";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <div>
      <section id={styles.area}>
        <div id={styles.loginArea}>
          <div id={styles.innerLogin}>
            <div className={styles.title}>
              <p>Fazer Login</p>
              <p>Seja bem-vindo de volta!</p>
            </div>
            <form>
              <div className={styles.input}>
                <div>
                  <img src={emailIcon} alt="icone de email" />
                </div>
                <input className="input-enter-data" placeholder="Email"></input>
              </div>
              <div className={styles.input}>
                <div>
                  <img src={passwordIcon} alt="icone de email" />
                </div>
                <input className="input-enter-data" placeholder="Senha"></input>
              </div>
              <div id={styles.infosUser}>
                <div id={styles.remember}>
                  <input type="checkbox" />
                  <p>Lembrar de mim?</p>
                </div>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick("/forget-password");
                  }}
                >
                  Esqueceu a senha?
                </p>
              </div>
              <Button
                text="Fazer Login"
                type="submit"
                onClick={(e) => console.log(e.preventDefault)}
              />
            </form>
            <div id={styles.createAccount}>
              Não possui uma conta?{" "}
              <button
                onClick={() => {
                  handleClick("/register");
                }}
              >
                Criar uma conta
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
