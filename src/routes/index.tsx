import { Route, Routes, useLocation } from "react-router-dom";
import {
  Login,
  Register,
  Shop,
  Error,
  Search,
  DetailProduct,
  ShoppingCart,
  PaymentMethods,
  ConfirmPayment,
  Pay,
} from "../pages";
import { Footer, Header } from "../components";
import { useWindowSize } from "data";

export const Rotas = () => {
  const location = useLocation();

  const { width } = useWindowSize();

  return (
    <>
      <div style={width > 1024 ? { height: "100px" } : { height: "50px" }}>
        <Header />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:idProduct" element={<DetailProduct />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/payment-method" element={<PaymentMethods />} />
        <Route path="/confirm-payment" element={<ConfirmPayment />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};
