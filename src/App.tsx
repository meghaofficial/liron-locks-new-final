import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import ShopPage from './components/Shop/ShopPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </>
  )
}

export default App
