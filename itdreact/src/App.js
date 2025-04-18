import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import WomenProducts from "./screens/womenProduct";
import MenProducts from "./screens/menProduct";
import KidsProducts from "./screens/kidsProduct"; 
import AccessoriesProducts from "./screens/accesoriesProduct";
import CosmeticsProducts from "./screens/cosmeticProduct";
import Details from "./screens/Details"; 
import CartDetails from "./screens/cartItems";
import ProceedToPayment from "./screens/proceedToPayment";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductForm from "./components/productForm";
import AdminDashboard from "./components/AdminDashboard";
import JewellerySection from "./components/jewllerySection";
import JwelleryItem from "./components/jewlleryitem";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product_form" element={<ProductForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/women" element={<WomenProducts />} />
        <Route path="/men" element={<MenProducts />} />
        <Route path="/kids" element={<KidsProducts />} />
        <Route path="/accessories" element={<AccessoriesProducts />} />
        <Route path="/cosmetics" element={<CosmeticsProducts />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/payment" element={<ProceedToPayment />} />
        <Route path="/JewellerySection" element={<JewellerySection />} />
      </Route>
    </Routes>
  );
}

export default App;
