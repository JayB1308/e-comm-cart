import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

const RouteHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  );
};

export default RouteHandler;
