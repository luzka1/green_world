import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import fruit1 from "../../assets/images/imgs.svg";

export const Home = () => {
  return (
    <div>
      <div id={styles.lpHeader}>
        <div id={styles.innerLpHeader}>
          <img src={logo} alt="logo" width={160} height={60} />
          <div>
            <button className={`${styles.outlineButton} ${styles.button}`}>
              <p>Cadastrar</p>
            </button>
            <button className={styles.button}>
              <p>Login</p>
            </button>
          </div>
        </div>
      </div>

      <section id={styles.lpBanner}>
        <div>
          <img src={logo} alt="logo" />
          <p className="landing-page-title">
            PRODUTOS ORGÂNICOS DE ALTA QUALIDADE
          </p>
          <p>Faça seu cadastro agora e aproveite todos os nossos benefícios!</p>
        </div>
      </section>

      <div className={styles.divisor} />

      <section id={styles.sectionTech}>
        <div id={styles.innerSectionTech}>
          <div className={styles.left}>
            <img src={fruit1} alt="foto de laranjas e cerejas" />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              <p className="landing-page-title">AGRICULTURA</p>
              <p className="landing-page-title">COM TECNOLOGIA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
