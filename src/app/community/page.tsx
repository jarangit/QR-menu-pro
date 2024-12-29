"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FoodCard from "../ui-system/molecules/food-card";
const mockMenuItems = [
  {
    id: 1,
    name: "กาแฟเย็น (Iced Coffee)",
    detail:
      "กาแฟหอมกรุ่นผสมน้ำแข็ง เพิ่มความเย็นสดชื่น เหมาะสำหรับดื่มในวันที่อากาศร้อน",
    imageUrl:
      "https://img.freepik.com/free-photo/iced-coffee_1339-4591.jpg?t=st=1735501573~exp=1735505173~hmac=8dc8ecbcb57c34fb8320c9c17df7236530284c484cdbf3ece928301b87b025f5&w=1060",
    price: "50 บาท",
    address: "ถนนสุขุมวิท ซอย 11, กรุงเทพฯ",
    distanceKm: 0.5,
  },
  {
    id: 2,
    name: "ก๋วยเตี๋ยวเป็ดตุ๋น (Stewed Braised Duck Noodles)",
    detail:
      "เมนูเส้นยอดฮิต น้ำซุปเข้มข้นด้วยเครื่องเทศและสมุนไพร พร้อมเป็ดตุ๋นเนื้อนุ่มละลายในปาก",
    imageUrl:
      "https://img.freepik.com/premium-photo/egg-noodles-with-stewed-braised-duck-brown-soup_1339-176178.jpg?w=2000",
    price: "100 บาท",
    address: "ย่านเยาวราช, กรุงเทพฯ",
    distanceKm: 2.0,
  },
  {
    id: 3,
    name: "พายแอปเปิ้ล (Apple Pie with Caramel Sauce)",
    detail:
      "ขนมหวานสไตล์โฮมเมด แป้งพายกรอบนอกนุ่มใน สอดไส้แอปเปิ้ลเคี่ยวและราดด้วยซอสคาราเมล",
    imageUrl:
      "https://img.freepik.com/free-photo/apple-pie-with-caramel-sauce-wooden-background_2829-5565.jpg?t=st=1735501703~exp=1735505303~hmac=42a43f208616acb07ec9a57cb70e3b644ad1909f2e43bd5001df46900f800c16&w=2000",
    price: "120 บาท",
    address: "ถนนทองหล่อ ซอย 5, กรุงเทพฯ",
    distanceKm: 3.5,
  },
  {
    id: 4,
    name: "แซลมอนอบกับหน่อไม้ฝรั่ง (Baked Salmon with Asparagus)",
    detail:
      "ปลาแซลมอนชิ้นโตอบจนสุกกำลังดี เสิร์ฟพร้อมหน่อไม้ฝรั่งและมะเขือเทศ เพิ่มความอร่อยและสุขภาพดีในจานเดียว",
    imageUrl:
      "https://img.freepik.com/free-photo/baked-salmon-garnished-with-asparagus-tomatoes-with-herbs_2829-14516.jpg?t=st=1735501741~exp=1735505341~hmac=823d2cf03462a686da2abc3e46300fc7944204368466d1d43d74e04e3f2dbd1c&w=2000",
    price: "250 บาท",
    address: "ถนนสาทร, กรุงเทพฯ",
    distanceKm: 5.0,
  },
];

const CommunityPage = () => {
  const [currentMenu, setCurrentMenu] = useState(0);

  const onToggleCurrentMenu = (index: number) => {
    if (index < 0 || index >= mockMenuItems.length) return;
    setCurrentMenu(index);
  };

  return (
    <div>
      {mockMenuItems.map((item, key) => (
        <React.Fragment key={key}>
          {currentMenu === key && <FoodCard data={item} />}
        </React.Fragment>
      ))}
      {/* controller */}
      <div className="px-8 mt-8">
        <div className="flex justify-around items-center px-4">
          <div className="">
            <FaArrowLeft
              size={30}
              onClick={() => onToggleCurrentMenu(currentMenu - 1)}
            />
          </div>
          <div>
            <FaArrowRight
              size={30}
              onClick={() => onToggleCurrentMenu(currentMenu + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
