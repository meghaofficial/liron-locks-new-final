import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import ProductsPage from './components/Products/ProductsPage';
import DisplayProduct from './components/Products/DisplayProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Navigate to="/products/iron_handles" replace />} />
        <Route path='/products/:category' element={<ProductsPage />} />
        <Route path='/:category/:product_name' element={<DisplayProduct />} />
      </Routes>
    </>
  )
}

export default App
