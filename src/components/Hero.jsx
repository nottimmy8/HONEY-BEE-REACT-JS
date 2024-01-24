import React from "react";

function Hero() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 bg-blue-500 ">
      {/* Flex container */}
      <div className="w-full flex flex-col-reverse items-center justify-center  mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
        {/* Left Items */}
        <div className="flex flex-col   space-y-0 md:w-1/2 sm:text-center">
          <h3 className="max-w-md text-1xl font-bold text-center md:text-1xl md:text-left">
            FRESH & SWEET AS HONEY.
          </h3>
          <h1 className="max-w-md text-7xl font-bold text-center md:text-7xl md:text-left">
            HONEY BEE
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left sm:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            error iusto. Esse hic perspiciatis voluptates libero qui incidunt
            fugiat tempore quis, rerum dolores inventore accusamus laboriosam
            ipsam dolorum ab illo?
          </p>

          <div className="flex justify-center md:justify-start">
            <button className=" bg-orange-600 ">View more</button>
          </div>
        </div>

        {/* Right Items */}
        <div className=" relative md:w-1/2">
          <img
            src="public/img/Honney-img.png"
            alt=""
            className=" h-[450px]  "
          />
          <img
            src="public/img/honey-pure.png"
            alt=""
            className=" absolute right-0 top-20 sm:top-10 right-0 size-10 "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
