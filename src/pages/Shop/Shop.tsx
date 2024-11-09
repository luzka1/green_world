import styles from "./styles.module.css";
import banner from "../../assets/images/banner.png";
import { CarouselProducts } from "../../components";
import { useEffect } from "react";
import { scrollToTop } from "themes";
import { useProductsContext } from "hooks/useProductsContext";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const { products, loading, getProducts } = useProductsContext();
  const navigate = useNavigate();

  const items = [
    {
      name: "Frutas",
      img: require("../../assets/images/Banana_pratapng 1.png"),
    },
    {
      name: "Verduras",
      img: require("../../assets/images/Banana_pratapng 1.png"),
    },
    {
      name: "Temperos",
      img: require("../../assets/images/Banana_pratapng 1.png"),
    },
    {
      name: "Utensilios",
      img: require("../../assets/images/Banana_pratapng 1.png"),
    },
    {
      name: "Utensilios",
      img: require("../../assets/images/Banana_pratapng 1.png"),
    },
    {
      name: "Utensilios",
      img: require("../../assets/images/Banana_pratapng 1.png"),
    },
  ];

  useEffect(() => {
    getProducts();
    scrollToTop();
  }, []);

  if (products.length < 1) {
    navigate("/login");
  }

  return (
    <>
      <section id={styles.promoBanner}>
        <img src={banner} alt="banner de promocao" />
      </section>
      <section id={styles.sectionItems}>
        <div id={styles.carrousselProducts}>
          {items.map((data, index) => (
            <div className={styles.itemType} key={index}>
              <div>
                <img src={data.img} width={50} height={50} alt={data.name} />
              </div>
              <p className="green">{data.name}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <CarouselProducts title="Promo diária" items={products} />
          <CarouselProducts title="Imperdíveis" items={products} />
        </div>
      </section>
    </>
  );
};
