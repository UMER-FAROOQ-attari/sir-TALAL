import React from "react";
import {Pocket, Search ,ShoppingCart ,CircleUserRound} from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className="bg-white nav flex items-center justify-between px-10  gap-20 p-5 ">
        <div className="logo">
          <Pocket size={52} />
        </div>
        <div className="input flex border-2 border-gray-400 rounded-lg p-3 gap-3 w-fit self-center">
          <Search size={25} />
          <input
            type="text"
            className="outline-none w-96"
            placeholder="Search for Products..."
          />
        </div>
        <div className="btns flex gap-4">
          <ShoppingCart size={30} />
          <CircleUserRound size={30} />
        </div>
      </div>
    </>
  );
};

export default Nav;
