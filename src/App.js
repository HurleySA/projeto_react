import React from "react";
import Produtos from "./Components/Produtos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Produtos" element={<Produtos />} />
          <Route path="/" element={<Produtos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
