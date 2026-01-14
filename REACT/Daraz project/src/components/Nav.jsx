import React from "react";
import { Pocket, Search, ShoppingCart, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-orange-500 flex flex-wrap items-center justify-between px-5 md:px-10 py-5 gap-5 shadow-lg">
      <Link to="/" className="text-white">
        <Pocket size={50} strokeWidth={2.5} />
      </Link>

      <div className="flex bg-white rounded-md px-3 py-2 gap-3 flex-1 max-w-xl border-2 border-gray-300">
        <Search className="text-gray-400" />
        <input
          type="text"
          className="outline-none w-full text-gray-700"
          placeholder="Search products here..."
        />
      </div>

      <div className="flex gap-6 text-white cursor-pointer">
        <ShoppingCart size={32} />
        <CircleUserRound size={32} />
      </div>
    </div>
  );
};

export default Nav;