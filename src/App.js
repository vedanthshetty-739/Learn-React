import React, { useState } from "react";
import ToDo from "./Pages/ToDo";
import ProductList from "./Pages/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
