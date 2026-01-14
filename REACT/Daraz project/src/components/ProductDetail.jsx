import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) return <h1 className="text-center mt-10 text-2xl">Loading...</h1>;

  return (
    <div className="bg-white p-6 md:p-12 rounded-xl shadow-lg border flex flex-col md:flex-row gap-12">
      <div className="w-full md:w-1/2 flex flex-col">
        <button onClick={() => navigate(-1)} className="mb-5 flex items-center gap-2 text-gray-600 hover:text-black">
          <FaArrowLeft /> Back
        </button>
        <img src={item.image} alt={item.title} className="max-h-96 object-contain mx-auto" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-extrabold text-gray-800">{item.title}</h1>
        <div className="flex items-center gap-2 mt-4 text-yellow-500">
          <FaStar /> <span className="text-gray-500 font-medium">{item.rating?.rate} Rating</span>
        </div>
        <h2 className="text-4xl font-black text-orange-600 mt-5">${item.price}</h2>
        <p className="text-gray-600 mt-6 text-lg leading-7">{item.description}</p>
        <button className="mt-10 bg-orange-500 text-white px-10 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-orange-600 transition">
          <FaShoppingCart size={20} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;