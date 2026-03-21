import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import ShopPage from './components/products/productsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ShopPage />} />
      </Routes>
    </>
  )
}

export default App
