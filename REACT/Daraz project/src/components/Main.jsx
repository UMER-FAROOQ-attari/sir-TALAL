import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-orange-500 p-5 rounded-xl flex flex-wrap gap-5 justify-center">
      {items.map((val) => (
        <div key={val.id} className="w-64 cursor-pointer" onClick={() => navigate(`/product/${val.id}`)}>
          <Cards 
            img={val.image} 
            title={val.title} 
            price={val.price} 
            rating={val.rating} 
            category={val.category} 
          />
        </div>
      ))}
    </div>
  );
};

export default Main;