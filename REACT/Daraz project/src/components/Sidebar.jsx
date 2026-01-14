import React from 'react';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-500 w-full md:w-60 p-6 rounded-lg h-fit shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6 underline decoration-orange-300">Categories</h2>
      <div className="flex flex-col gap-4 text-white font-medium">
        
        {/* Is line mein 'defaultChecked' add kiya gaya hai */}
        <div className="flex items-center gap-2">
          <input 
            type="radio" 
            name="item" 
            id="all" 
            onChange={() => navigate("/")} 
            defaultChecked 
          />
          <label htmlFor="all" className="cursor-pointer">All Products</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="item" id="m" onChange={() => navigate("/man")} />
          <label htmlFor="m" className="cursor-pointer">Men's Fashion</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="item" id="f" onChange={() => navigate("/females")} />
          <label htmlFor="f" className="cursor-pointer">Women's Fashion</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="item" id="e" onChange={() => navigate("/electronics")} />
          <label htmlFor="e" className="cursor-pointer">Electronics</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="item" id="j" onChange={() => navigate("/jewelery")} />
          <label htmlFor="j" className="cursor-pointer">Jewelery</label>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;