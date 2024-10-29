import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Register, Shop, Error, Search } from "../pages";
import { Footer, Header } from "../components";
import { useWindowSize } from "data";
import DetailProduct from "pages/DetailProduct/DetailProduct";
import PaymentMethods from "pages/PaymentMethods/PaymentMethods";

export const Rotas = () => {
  const location = useLocation();

  const { width } = useWindowSize();

  return (
    <>
      <div style={width > 1024 ? { height: "100px" } : { height: "50px" }}>
        <Header />
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:idProduct" element={<DetailProduct />} />
        <Route path="payment-method" element={<PaymentMethods />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};
