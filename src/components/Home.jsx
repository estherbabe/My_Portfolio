import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black
       to-gray-800 "
    >
      <div
        className=" max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row "
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text7xl font-bold text-white">
            Hi!, I'm Esther and i'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et tortor vulputate, venenatis diam et, rutrum dui. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>

          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 
            flex items-center rounded-md bg-gradient-to-r
             from-purple-500 to-fuchsia-500 cursor-pointer"
            >
              Porfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my face"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
