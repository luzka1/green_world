import styles from "./styles.module.css";
import shoppingCart from "../../assets/images/material-symbols_shopping-cart.svg";
import { ItemProp } from "interfaces/App.interface";
import { useNavigate } from "react-router-dom";

interface IProductsProps {
  item: ItemProp;
}

export const ProductShop = ({ item }: IProductsProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className={styles.productItem}>
      <img src={item.photo} alt="foto de um tomate" />
      <div className={styles.infosProduct}>
        <div className={styles.productName}>
          <p>{item.name}</p>
        </div>
        <div className={`gray ${styles.productName}`}>{item.type}</div>
        <div  style={{textDecoration: "line-through"}} className="gray">{item.value}</div>
        <div className="subtitle green bold">{item.promoValue}</div>
        <button className="shop-button" type="button" onClick={() => handleClick()}>
          <img src={shoppingCart} alt="icone de carrinho de compras" />
          <p>Comprar</p>
        </button>
      </div>
    </div>
  );
};
