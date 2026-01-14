import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ProductDetail from "./components/ProductDetail";
import Man from "./components/Man";
import Females from "./components/Females";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="flex flex-col md:flex-row p-5 md:p-10 gap-5">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/man" element={<Man />} />
            <Route path="/females" element={<Females />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;