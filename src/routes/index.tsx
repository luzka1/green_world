import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Register, Shop, Error } from "../pages";
import { Footer, Header } from "../components";

export const Rotas = () => {
  const location = useLocation();

  const hiddenComponents = location.pathname === "/error";

  return (
    <>
      <div style={{ height: "100px" }}>
        <Header />
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};
