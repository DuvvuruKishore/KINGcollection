import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Product from './components/Products/Product';
import Cart from './components/Cart';
import Productdesc from './components/Productdesc';
import Startpage from './components/Startpage';// what kind of products this website sells


function App() {
 
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={ <Startpage/> } />
        <Route path="/products" element={ <Product/> } />
        <Route path="/Cart" element={ <Cart/> } />
        <Route path='/Product/:id' element={ <Productdesc/> } />
       
      </Routes>
    </div>
  );
}

export default App;
