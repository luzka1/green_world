import styles from "./styles.module.css";
import logo from "../../assets/images/white-logo.svg";
import mobileLogo from "../../assets/images/bxs_leaf.svg";
import shoppingCart from "../../assets/images/material-symbols_shopping-cart.svg";
import notification from "../../assets/images/mingcute_notification-fill.svg";
import user from "../../assets/images/iconamoon_profile-fill.svg";
import close from "../../assets/images/close.svg";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "data";
import { useRef } from "react";
import { useAppContext } from "hooks/useAppContext";
import { useUserContext } from "hooks/useUserContext";

export const Header = () => {
  const { cartItems } = useAppContext();
  const { isLogged } = useUserContext();
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const headerRef = useRef<HTMLElement>(null);

  const handleClick = (route: string) => {
    navigate(route);
  };

  const showHeader = () => {
    if (headerRef.current) {
      headerRef.current.classList.toggle(styles.responsiveHeader);
    }
  };

  return (
    <header ref={headerRef}>
      <div className={styles.innerHeader}>
        <div className={styles.priDiv}>
          <img
            src={width > 1024 ? logo : mobileLogo}
            alt="logo"
            onClick={() => handleClick("/")}
          />
          <button className={styles.btnHeader} onClick={showHeader}>
            &#9776;
          </button>
        </div>
        {isLogged ? (
          <input placeholder="pesquise aqui..."></input>
        ) : (
          <div />
        )}
        <div>
          {!isLogged ? (
            <>
              <div onClick={() => handleClick("/register")}> Cadastrar </div>
              <div
                onClick={() => handleClick("/login")}
                className={styles.btnLogin}
              >
                Login
              </div>
            </>
          ) : null}
          <div
            className={styles.shoppingCart}
            onClick={() => handleClick("/shopping-cart")}
          >
            <img src={shoppingCart} alt="icone de carrinho de compras" />
            <p>Carrinho</p>
            {cartItems.length > 0 && <div>{cartItems.length}</div>}
          </div>
          <div>
            <img src={notification} alt="icone de notificacao" />
            <p>Notificações</p>
          </div>
          {isLogged ? (
            <div onClick={() => handleClick("/user")}>
              <img src={user} alt="icone de usuario" />
              <p>Meu perfil</p>
            </div>
          ) : null}
          <button className={styles.btnHeaderClose} onClick={showHeader}>
            <img src={close} alt="close button" />
          </button>
        </div>
      </div>
    </header>
  );
};
