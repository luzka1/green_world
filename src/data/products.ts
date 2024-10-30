import tomato from "../assets/images/tomato.png";

const orange = "https://tdc08h.vteximg.com.br/arquivos/ids/199753-1000-1000/Laranja-Pera.jpg?v=637993705939370000";
const avocado = "https://cdn.iset.io/assets/60955/produtos/452/abacate.png";
const grape = "https://obahortifruti.vtexassets.com/arquivos/ids/5195454/Uva-Verde-Sem-Semente-500-G.png?v=638332545845770000";
const banana = "https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng.png";
const guava = "https://cdn.awsli.com.br/600x450/681/681419/produto/265405313/goiaba-vermelha---caixa-de-6kg-ppxox9xyu6.png";
const kiwi = "https://superprix.vteximg.com.br/arquivos/ids/175974-292-292/Kiwi-Importado--1-unidade-aprox.-100g-.png?v=636410713461700000";
const tangerine = "https://crsupermercados.com.br/cdn/shop/files/tangerina-murkot_700x.png?v=1710864504";

export const items = [
  {
    id: generateId(),
    photo: tomato,
    name: "Tomate",
    type: "Frutas",
    value: "R$ 7,99",
    promoValue: "4,99",
    product_desc: "O tomate é uma fruta rica em sabor e nutrientes.",
    product_composition: "Contém vitaminas A, C, e K, além de antioxidantes.",
    product_full_desc: "O tomate é amplamente utilizado na culinária, seja em saladas, molhos ou pratos cozidos. É uma excelente fonte de licopeno, um poderoso antioxidante que ajuda a combater doenças."
  },
  {
    id: generateId(),
    photo: orange,
    name: "Laranja Pera",
    type: "Frutas",
    value: "R$ 3,99",
    promoValue: "1,99",
    product_desc: "A laranja Pera é doce e suculenta, ideal para sucos.",
    product_composition: "Rica em vitamina C, fibras e antioxidantes.",
    product_full_desc: "A laranja Pera é uma das variedades mais populares no Brasil. Seu sabor doce e ácido combina bem em sucos e sobremesas, além de oferecer uma grande quantidade de vitamina C, que é fundamental para a imunidade."
  },
  {
    id: generateId(),
    photo: avocado,
    name: "Abacate",
    type: "Frutas",
    value: "R$ 5,99",
    promoValue: "2,99",
    product_desc: "O abacate é cremoso e nutritivo, excelente para receitas saudáveis.",
    product_composition: "Fonte de gorduras saudáveis, fibras, vitaminas E e K.",
    product_full_desc: "O abacate é conhecido por suas propriedades benéficas à saúde cardiovascular. Pode ser consumido em diversas preparações, como guacamole, saladas ou até em smoothies, conferindo cremosidade e sabor."
  },
  {
    id: generateId(),
    photo: grape,
    name: "Uva",
    type: "Frutas",
    value: "R$ 17,99",
    promoValue: "14,99",
    product_desc: "As uvas são pequenas, doces e ótimas para lanchar.",
    product_composition: "Ricas em antioxidantes, vitamina C e K.",
    product_full_desc: "As uvas são uma opção deliciosa e prática para lanches e sobremesas. Além de serem ótimas consumidas in natura, podem ser utilizadas em vinhos, geleias e até em pratos salgados, proporcionando um contraste de sabores."
  },
  {
    id: generateId(),
    photo: banana,
    name: "Banana prata",
    type: "Frutas",
    value: "R$ 2,99",
    promoValue: "1,99",
    product_desc: "A banana prata é doce e rica em potássio, ideal para snacks.",
    product_composition: "Contém potássio, vitamina B6 e fibras.",
    product_full_desc: "A banana prata é uma das frutas mais consumidas no Brasil. É uma excelente opção de lanche prático, que fornece energia rápida, ideal para atletas e pessoas em movimento. Pode ser consumida pura, em vitaminas ou em receitas de bolos."
  },
  {
    id: generateId(),
    photo: guava,
    name: "Goiaba",
    type: "Frutas",
    value: "R$ 5,99",
    promoValue: "3,49",
    product_desc: "A goiaba é uma fruta tropical, doce e cheia de sabor.",
    product_composition: "Rica em vitamina C, fibras e licopeno.",
    product_full_desc: "A goiaba é uma fruta versátil que pode ser consumida fresca, em sucos ou na forma de compotas. Além de seu sabor doce, é uma fonte incrível de nutrientes que ajudam a fortalecer o sistema imunológico."
  },
  {
    id: generateId(),
    photo: kiwi,
    name: "Kiwi",
    type: "Frutas",
    value: "R$ 2,99",
    promoValue: "1,49",
    product_desc: "O kiwi é uma fruta exótica, ácida e refrescante.",
    product_composition: "Rico em vitamina C, vitamina K e fibras.",
    product_full_desc: "O kiwi é conhecido por sua acidez e textura única. É uma excelente adição a saladas, smoothies ou consumido puro. Seu alto teor de vitamina C contribui para a saúde da pele e do sistema imunológico."
  },
  {
    id: generateId(),
    photo: tangerine,
    name: "Tangerina",
    type: "Frutas",
    value: "R$ 3,99",
    promoValue: "1,49",
    product_desc: "A tangerina é uma fruta doce e fácil de descascar.",
    product_composition: "Fonte de vitamina C, fibras e folato.",
    product_full_desc: "A tangerina é uma opção refrescante e prática para lanches. Além de ser deliciosa, é rica em vitamina C e fibras, contribuindo para a saúde digestiva e imunológica."
  },
];


function generateId() {
  return Math.random().toString(36).substr(2, 9); // Gera um ID aleatório
}