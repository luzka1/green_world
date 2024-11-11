interface IOrder {
  photo: string;
  name: string;
  qt: string;
  order: string;
  status: string;
  orderDate: string;
}

export const orders = [
  {
    items: [
      {
        photo:
          "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
        name: "Kiwi",
        qt: "1kg",
      },
    ],
    order: "39140344",
    status: "complete",
    orderDate: "17/05/2024",
    price: "15,98",
    method: "pix",
  },
  {
    items: [
      {
        photo:
          "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
        name: "Kiwi",
        qt: "1kg",
      },
      {
        photo:
          "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
        name: "Kiwi",
        qt: "1kg",
      },
    ],
    order: "8536745",
    status: "pending",
    orderDate: "19/03/2024",
    price: "20,98",
    method: "credit-card",
  },
  {
    items: [
      {
        photo:
          "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
        name: "Kiwi",
        qt: "1kg",
      },
      {
        photo:
          "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000",
        name: "Kiwi",
        qt: "1kg",
      },
    ],
    order: "1241545",
    status: "error",
    orderDate: "04/01/2024",
    price: "10,99",
    method: "pix",
  },
];
