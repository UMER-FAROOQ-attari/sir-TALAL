import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Cards = (props) => {
  const num = props.rating?.rate || 0;

  const showStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (num >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (num >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow h-full flex flex-col hover:shadow-lg transition">
      <div className="h-40 flex justify-center items-center mb-3">
        <img src={props.img} alt="product" className="h-full object-contain" />
      </div>
      <h6 className="text-xs text-blue-500 font-bold uppercase">{props.category}</h6>
      <h2 className="text-sm font-semibold text-gray-700 line-clamp-2 mb-2">{props.title}</h2>
      <div className="mt-auto">
        <p className="text-xl font-bold text-gray-900">${props.price}</p>
        <div className="flex items-center gap-1 mt-2">
          <div className="flex text-xs">{showStars()}</div>
          <span className="text-xs text-gray-400">({props.rating?.count})</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;