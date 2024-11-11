import styles from "./styles.module.css";
import { Button } from "../../components";
import emailIcon from "../../assets/images/ic_baseline-email (1).svg";
import passwordIcon from "../../assets/images/ic_baseline-email (2).svg";
import { useNavigate } from "react-router-dom";
import { api } from "api/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUserContext } from "hooks/useUserContext";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { getUserData } = useUserContext();

  const handleClick = (route: string) => {
    navigate(route);
  };

  const Login = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const formData = {
      Username: email,
      Password: password,
    };

    try {
      const response = await api.post("/login", formData);
      localStorage.setItem("token", response.data.userId);
      getUserData(response.data.userId);
      toast.success("Login efetuado com sucesso!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
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
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-enter-data"
                  placeholder="Email"
                  type="email"
                ></input>
              </div>
              <div className={styles.input}>
                <div>
                  <img src={passwordIcon} alt="icone de email" />
                </div>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-enter-data"
                  placeholder="Senha"
                  type="password"
                ></input>
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
                onClick={(e) => Login(e)}
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
