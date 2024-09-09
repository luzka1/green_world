import styles from "./styles.module.css";
import logo from "../../assets/images/white-logo.svg";

export const Footer = () => {
  const linksData = [
    { title: "Contatos", texts: ["contact@greenworld.com", "(11)91234-4523"] },
    { title: "Redes Sociais", texts: ["X", "Instagram", "Facebook"] },
    { title: "Minha Conta", texts: ["Configurações", "Favoritos", "Carrinho"] },
  ];

  return (
    <footer>
      <div id={styles.innerFooter}>
        <div id={styles.links}>
          <div className={styles.logo}>
            <img src={logo} alt="logo na regiao do rodape"></img>
          </div>
          {linksData?.map((item, index) => (
            <div className={styles.link} key={index}>
              <div className="footer-title">{item.title}</div>
              <div>
                {item.texts.map((item, index) => (
                  <>
                    <p key={index}>{item}</p>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div id={styles.rights}>
          <p>Green World © Todos os direitos reservados 2024</p>
        </div>
      </div>
    </footer>
  );
};
