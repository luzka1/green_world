import styles from "./styles.module.css";
import tomato from "../../assets/images/tomato.png";
import shoppingCart from "../../assets/images/material-symbols_shopping-cart.svg";
import { ItemProp } from "interfaces/App.interface";

interface IProductsProps {
  item: ItemProp;
}

export const ProductShop = ({ item }: IProductsProps) => {

  return (
    <div className={styles.productItem}>
      <img src={tomato} alt="foto de um tomate" />
      <div className={styles.infosProduct}>
        <div className={styles.productName}>
          <p>{item.name}</p>
        </div>
        <div className="gray">{item.type}</div>
        <div className="gray">{item.value}</div>
        <div className="subtitle green bold">{item.promoValue}</div>
        <button>
          <img src={shoppingCart} alt="icone de carrinho de compras" />
          <p>Comprar</p>
        </button>
      </div>
    </div>
  );
};
