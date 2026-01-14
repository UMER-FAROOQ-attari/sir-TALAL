import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const Females = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="bg-orange-500 p-5 rounded-xl flex flex-wrap gap-5 justify-center">
      {data.map((x) => (
        <div key={x.id} className="w-64" onClick={() => navigate(`/product/${x.id}`)}>
          <Cards img={x.image} title={x.title} price={x.price} rating={x.rating} category={x.category} />
        </div>
      ))}
    </div>
  );
};

export default Females;