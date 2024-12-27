import Image from "next/image";
import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const FoodCard = () => {
  const image = "/assets/images/food1.jpg";

  return (
    <div>
      {/* food card */}
      <div className="p-8 bg-white">
        <div className="py-4 w-full h-[80vh] relative rounded-3xl overflow-hidden">
          <Image src={image} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
          <div className="absolute left-6 top-6 ">
            <div className="bg-white/20 text-white font-bold h-12 flex justify-center items-center px-3 rounded-full gap-1 ">
              <MdLocationOn size={20} />
              <div>1 km</div>
            </div>
          </div>
          <div className="absolute bottom-12 right-6 flex flex-col gap-6 justify-around items-center px-4">
            <div className="w-20 h-20 bg-white/30 rounded-full text-white flex justify-center items-center backdrop-blur">
              <IoClose size={40} />
            </div>
            <div className="w-20 h-20 bg-white/30 rounded-full text-white flex justify-center items-center backdrop-blur">
              <FaStar size={30} />
            </div>
            <div className="w-20 h-20 bg-red-600/70 rounded-full text-white flex justify-center items-center backdrop-blur">
              <FaHeart size={30} />
            </div>
          </div>

          <div className="absolute bottom-32 left-12  leading-[4] text-white">
            <h1 className="text-4xl font-bold border-b uppercase">
              roadted lamp
            </h1>
            <p className=" font-light">Tag someone who would like this</p>

            {/* button */}

            <button className="bg-white/20  h-12 flex justify-center items-center px-6 rounded-full uppercase">
              <div>Read more</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
