import './App.css';
import './Iphone.css';
import { useSelector } from 'react-redux';
import { createContext } from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';

// const parent = createContext(null);
function App() {
  const { value } = useSelector((state) => state.Auth);
  console.log({ value });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
