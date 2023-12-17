import logo from "./logo.svg";
import "./App.css";
//import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar";
//import Hero from "./components/hero/hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Pages/Shop";
import ShopCategory from "./components/Pages/ShopCategory";
import Product from "./components/Pages/Product";
import Cart from "./components/Pages/Cart";
import LoginSignup from "./components/Pages/LoginSignup";
import { Footer } from "./components/Footer/Footer";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kid_banner from "./components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
