import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Register, Shop } from "../pages";

export const Rotas = () => {
  const location = useLocation();

  const hiddenComponents =
    location.pathname === "/error";

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};
