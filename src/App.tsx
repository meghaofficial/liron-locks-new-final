import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import ProductsPage from './components/Products/ProductsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Navigate to="/products/iron_handles" replace />} />
        <Route path='/products/:category' element={<ProductsPage />} />
      </Routes>
    </>
  )
}

export default App
