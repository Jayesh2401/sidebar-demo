import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Comment from "./Pages/Comment";
import Analytics from "./Pages/Analytics";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";
import Productlst1 from "./Pages/Productlst1";
import Productlst2 from "./Pages/Productlst2";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productlst" element={<ProductList />} />
            <Route path="/product/product1" element={<Product1 />} />
            <Route path="/product/product2" element={<Product2 />} />
            <Route path="/productlst/productlst1" element={<Productlst1 />} />
            <Route path="/productlst/productlst2" element={<Productlst2 />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;

// <Route path='/dashboard' element={<Dashboard />} />
// <Route path='/about' element={<About/>} />
// <Route path='/comment' element={<Comment />} />
// <Route path='/analytics' element={<Analytics />} />
// <Route path='/product' element={<Product />} />
// <Route path='/productlst' element={<ProductList />} />
