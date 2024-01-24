import React from "react";
import { CiShoppingBasket } from "react-icons/ci";

function Navbar() {
  return (
    <div className="max-w-[1200px] bg-yellow-400 mx-auto ">
      <nav className=" flex justify-between p-4">
        {/* Logo */}
        <div className=" w-24">
          <img src="public/img/Bee-Logo.png" alt="" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex ">
          <h1 className="">HOME</h1>
          <h1>PAGES</h1>
          <h1>PRODUCTS</h1>
          <h1>BLOG</h1>
          <h1>PORTFOLIO</h1>
        </div>

        {/* */}
        <div className=" hidden space-x-5 items-center md:flex">
          {/* cart */}
          <div className=" relative w-8 p-1 ">
            <CiShoppingBasket size={25} />
            <span className=" absolute top-0 right-0">0</span>
          </div>
          {/* contact */}
          <button className="   text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight ">
            CONTACT
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
