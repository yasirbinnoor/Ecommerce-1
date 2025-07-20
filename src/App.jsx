import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar1 } from './components/Navbar1';
import { Navbar2 } from './components/Navbar2';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { SearchItem } from './components/SearchItem';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext'// ✅ context import
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar1 />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/category/:category" element={<Products />} />
          <Route path="/price/:amount" element={<Products />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
