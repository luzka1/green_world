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
  User,
  UserDetails,
  DetailOrder,
} from "../pages";
import { Footer, Header } from "../components";
import { useWindowSize } from "data";
import { useEffect } from "react";
import { useUserContext } from "hooks/useUserContext";

export const Rotas = () => {
  const { getUserData, isLogged } = useUserContext();

  const token = localStorage.getItem("token");

  useEffect(() => {
    getUserData(token);
  }, [token]);

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
        <Route path="/" element={<Shop />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:idProduct" element={<DetailProduct />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        {isLogged && (
          <>
            <Route path="/payment-method" element={<PaymentMethods />} />
            <Route path="/confirm-payment" element={<ConfirmPayment />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/details" element={<UserDetails />} />
            <Route path="/order/:idOrder" element={<DetailOrder />} />{" "}
          </>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};
