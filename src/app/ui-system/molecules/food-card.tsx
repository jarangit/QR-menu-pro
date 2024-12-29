import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import { MdFastfood, MdLocationOn } from "react-icons/md";

const FoodCard = () => {
  const image = "/assets/images/food1.jpg";
  const dot = ["", "", "", "", ""];
  return (
    <div>
      {/* food card */}
      <div className="p-4 bg-white">
        <div className="py-4 w-full h-[80vh] relative rounded-3xl overflow-hidden">
          <Image src={image} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
          <div className="absolute left-4 top-4 ">
            <div className="bg-white/20 text-white/70 text-sm font-bold h-8 flex justify-center items-center px-2 rounded-full gap-1 ">
              <MdLocationOn size={15} />
              <div>1 km</div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col gap-4 justify-around items-center ">
            <div className="w-12 h-12 bg-white/30 rounded-full  flex justify-center items-center backdrop-blur text-orange-400/70">
              <FaStar size={20} />
            </div>
            <div className="w-12 h-12 bg-white/30 rounded-full  flex justify-center items-center backdrop-blur text-white">
              <MdFastfood size={20} />
            </div>
            <div className="w-12 h-12 bg-white/30 rounded-full text-white flex justify-center items-center backdrop-blur">
              <IoArrowRedo size={20} />
            </div>
          </div>

          <div className="absolute bottom-5 left-4  leading-[3] text-white ">
            <h1 className="text-xl font-bold border-b uppercase">
              roadted lamp
            </h1>
            <p className=" font-light">Tag someone who would like this</p>
          </div>

          {/* dot */}
          <div className=" absolute bottom-3 w-full flex justify-center gap-2">
            {dot.map((item, key) => (
              <div
                key={key}
                id="my-dot"
                className={`w-2 h-2 rounded-full  ${
                  key == 0 ? "bg-white/50" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
