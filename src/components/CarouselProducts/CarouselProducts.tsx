import styles from "./styles.module.css";
import { ProductShop } from "components";
import { ItemProp } from "interfaces/App.interface";
import { useRef } from "react";

interface CarouselProps {
  title: string;
}

export const CarouselProducts = ({ title }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollAmount = carousel.clientWidth;

      if (direction === "left") {
        carousel.scrollLeft -= scrollAmount;
      } else {
        carousel.scrollLeft += scrollAmount;
      }
    }
  };

  const items: ItemProp[] = [
    {
      photo: "tomato",
      name: "Frutas",
      type: "Frutas",
      value: "R$ 7,99",
      promoValue: "R$ 4,99",
    },
    {
      photo: "tomato",
      name: "Frutas",
      type: "Frutas",
      value: "R$ 7,99",
      promoValue: "R$ 4,99",
    },
    {
      photo: "tomato",
      name: "Frutas",
      type: "Frutas",
      value: "R$ 7,99",
      promoValue: "R$ 4,99",
    },
    {
      photo: "tomato",
      name: "Frutas",
      type: "Frutas",
      value: "R$ 7,99",
      promoValue: "R$ 4,99",
    },
    {
      photo: "tomato",
      name: "Frutas",
      type: "Frutas",
      value: "R$ 7,99",
      promoValue: "R$ 4,99",
    },
    {
      photo: "tomato",
      name: "Frutas",
      type: "Frutas",
      value: "R$ 7,99",
      promoValue: "R$ 4,99",
    },
    {
      photo: "tomato",
      name: "Frutas",
      type: "Frutas",
      value: "R$ 7,99",
      promoValue: "R$ 4,99",
    },
    {
      photo: "tomato",
      name: "Frutas",
      type: "Frutas",
      value: "R$ 7,99",
      promoValue: "R$ 4,99",
    },
  
  ];

  return (
    <div className={styles.itemsArea}>
      <div className={styles.itemsShop}>
        <div className={styles.titleShop}>
          <h1 className="subtitle green">{title}</h1>
          <p className="blue">Ver todos</p>
        </div>
        <div className={styles.carouselWrapper}>
          <button
            className={styles.navButton}
            onClick={() => scrollCarousel("left")}
          >
            &#8249;
          </button>
          <div className={styles.products} ref={carouselRef}>
            {items.map((item, id) => (
              <div key={id}>
                <ProductShop item={item} />
              </div>
            ))}
          </div>
          <button
            className={styles.navButton}
            onClick={() => scrollCarousel("right")}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};
