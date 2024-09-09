import styles from "./styles.module.css";
import logo from "../../assets/images/white-logo.svg";
import shoppingCart from "../../assets/images/material-symbols_shopping-cart.svg";
import notification from "../../assets/images/mingcute_notification-fill.svg";
import user from "../../assets/images/iconamoon_profile-fill.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  let isUserLogged: boolean = false;
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <header>
      <div className={styles.innerHeader}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        {isUserLogged ? (
          <input placeholder="pesquise aqui..."></input>
        ) : (
          <div />
        )}
        <div>
          {!isUserLogged ? (
            <>
              <div onClick={() => handleClick("/register")}> Cadastrar </div>
              <div
                onClick={() => handleClick("/login")}
                className={styles.btnLogin}
              >
                {" "}
                Login{" "}
              </div>
            </>
          ) : null}
          <div>
            <img src={shoppingCart} alt="icone de carrinho de compras" />
          </div>
          <div>
            <img src={notification} alt="icone de notificacao" />
          </div>
          {isUserLogged ? (
            <div>
              <img src={user} alt="icone de usuario" />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
