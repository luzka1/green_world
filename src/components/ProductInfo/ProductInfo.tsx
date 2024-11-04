import styles from "../../pages/DetailProduct/styles.module.css";
import { ItemProp } from "interfaces/App.interface";
import shoppingCart from "../../assets/images/material-symbols_shopping-cart.png";
import { toast } from "react-toastify";

interface InfoProductProps {
  produto: ItemProp;
}

const ProductInfo = ({ produto }: InfoProductProps) => {
  const handleSendToCart = (product: ItemProp) => {
    const existingItems: ItemProp[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

    existingItems.push(product);

    localStorage.setItem("cartItems", JSON.stringify(existingItems));

    toast.success("Produto colocado no carrinho com sucesso!");
  };

  return (
    <div className={styles.product}>
      <div className={styles.productPhoto}>
        <img src={produto.photo} alt={`Foto de ${produto.name}`} />
      </div>
      <div className={styles.productData}>
        <h1>{produto.name}</h1>
        <p className="gray">{produto.product_desc}</p>

        <div className="">
          <p style={{ textDecoration: "line-through" }} className="gray">
            {produto.value}
          </p>
          <p className="subtitle green bold" style={{ fontSize: "2rem" }}>
            RS$ {produto.promoValue}
          </p>
          <p className="gray">* Preco por quilo</p>
        </div>

        <div className="">
          <p className="green">Frete grátis</p>
          <p className="blue">Estoque disponível</p>
        </div>

        <button
          className="shop-button"
          type="button"
          onClick={() => handleSendToCart(produto)}
        >
          <img src={shoppingCart} alt="icone de carrinho de compras" />
          <p>Comprar</p>
        </button>
      </div>
      <div className={styles.productInfo}>
        <h1>Informações sobre o produto</h1>
        <p className="gray">{produto.product_full_desc}</p>
        <p className="gray bold">Fornecedor:</p>
        <p className="blue">FARM CONEXA</p>
        <p className="gray bold">Composição:</p>
        <p className="gray">{produto.product_composition}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
