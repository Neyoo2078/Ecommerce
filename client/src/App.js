import './App.css';
import './Iphone.css';
import { useSelector } from 'react-redux';
import { createContext } from 'react';
import Home from './Pages/Home';
import ProductDeatils from './Pages/ProductDeatils';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components';
import Carts from './Pages/Carts';
import Signin from './Pages/Signin';

// const parent = createContext(null);
function App() {
  const { value } = useSelector((state) => state.Auth);

  console.log({ value });

  return (
    <>
      <div>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productDetails/:id' element={<ProductDeatils />} />
            <Route path='/cart' element={<Carts />} />
            <Route path='/Signin' element={<Signin />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
