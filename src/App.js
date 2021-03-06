import React from "react";
import Produtos from "./Components/Produtos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contato from "./Components/Contato";
import Item from "./Components/Item";
import styles from "./App.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="produto/:id" element={<Item />} />
          <Route path="Contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
