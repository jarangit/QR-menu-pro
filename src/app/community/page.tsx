import React from "react";
import { FaUser } from "react-icons/fa";
import FoodCard from "../ui-system/molecules/food-card";

const CommunityPage = () => {
  return (
    <div>
      <FoodCard />
      {/* controller */}
      <div className="px-8 mt-8">
        <div className="flex justify-around items-center px-4">
          <div className="">
            <FaUser size={30} />
          </div>
          <div>
            <FaUser size={30} />
          </div>
          <div>
            <FaUser size={30} />
          </div>
          <div>
            <FaUser size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
