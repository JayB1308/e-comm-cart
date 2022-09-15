import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import ThankYou from "./pages/ThankYou";

const RouteHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default RouteHandler;
