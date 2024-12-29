"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FoodCard from "../ui-system/molecules/food-card";
const mockMenuItems = [
  {
    id: 1,
    name: "ข้าวมันไก่ (Hainanese Chicken Rice)",
    detail:
      "ข้าวหอมมะลินุ่ม ๆ เสิร์ฟพร้อมไก่ต้มเนื้อนุ่ม น้ำจิ้มเต้าเจี้ยวและน้ำซุปใส",
    imageUrl:
      "https://img.freepik.com/free-photo/hainanese-chicken-rice-sliced-chicken-top-view_1339-201482.jpg?w=2000",
    price: "50 บาท",
    address: "ตลาดโต้รุ่ง หัวหิน, ประจวบคีรีขันธ์",
    distanceKm: 0.8,
  },
  {
    id: 2,
    name: "ผัดไทยกุ้งสด (Pad Thai with Shrimp)",
    detail:
      "ก๋วยเตี๋ยวผัดไทยสไตล์ดั้งเดิม ใส่กุ้งตัวโต ๆ รสชาติหวานเค็มเผ็ดกำลังดี",
    imageUrl:
      "https://img.freepik.com/free-photo/thai-food-pad-thai-top-view_1339-201485.jpg?w=2000",
    price: "70 บาท",
    address: "ถนนข้าวสาร, กรุงเทพฯ",
    distanceKm: 1.2,
  },
  {
    id: 3,
    name: "ต้มยำกุ้ง (Tom Yum Goong)",
    detail:
      "ซุปสมุนไพรรสจัดจ้าน หอมกลิ่นตะไคร้ ใบมะกรูด ผสมความเปรี้ยวและเผ็ดอย่างลงตัว",
    imageUrl:
      "https://img.freepik.com/free-photo/spicy-shrimp-soup-with-mushroom-wooden-bowl_1150-43046.jpg?w=2000",
    price: "120 บาท",
    address: "ซอยอารีย์, กรุงเทพฯ",
    distanceKm: 2.5,
  },
  {
    id: 4,
    name: "ส้มตำไทย (Som Tum Thai)",
    detail: "ตำส้มตำรสชาติครบรส เปรี้ยว หวาน เผ็ด เค็ม ตามแบบฉบับส้มตำไทย",
    imageUrl:
      "https://img.freepik.com/free-photo/papaya-salad-with-vegetables-is-wooden-dish_1339-180628.jpg?w=2000",
    price: "50 บาท",
    address: "ย่านลาดพร้าว, กรุงเทพฯ",
    distanceKm: 1.9,
  },
  {
    id: 5,
    name: "แกงเขียวหวานไก่ (Green Curry with Chicken)",
    detail:
      "แกงเขียวหวานรสเข้มข้น ใส่เนื้อไก่และมะเขือเปราะ พร้อมใบโหระพาเพิ่มความหอม",
    imageUrl:
      "https://img.freepik.com/free-photo/green-curry-chicken-rice-bowl_1339-137917.jpg?w=2000",
    price: "80 บาท",
    address: "ถนนสีลม, กรุงเทพฯ",
    distanceKm: 3.2,
  },
  {
    id: 6,
    name: "ข้าวซอยไก่ (Khao Soi Gai)",
    detail:
      "อาหารเหนือสุดฮิต น้ำแกงเข้มข้นใส่กะทิ พร้อมบะหมี่กรอบโรยหน้าและเครื่องเคียง",
    imageUrl:
      "https://img.freepik.com/free-photo/khao-soi-gai-northern-thai-curry-noodles-with-chicken_1339-148757.jpg?w=2000",
    price: "75 บาท",
    address: "ย่านนิมมานเหมินท์, เชียงใหม่",
    distanceKm: 4.8,
  },
  {
    id: 7,
    name: "สเต็กเนื้อ (Beef Steak)",
    detail:
      "เนื้อย่างชิ้นใหญ่ ย่างแบบมีเดียมแรร์ พร้อมซอสพริกไทยดำ และเครื่องเคียงมันบด",
    imageUrl:
      "https://img.freepik.com/free-photo/grilled-beef-steak_74190-8761.jpg?w=2000",
    price: "350 บาท",
    address: "ถนนทองหล่อ ซอย 10, กรุงเทพฯ",
    distanceKm: 2.0,
  },
  {
    id: 8,
    name: "หมูกรอบผัดพริกเผา (Crispy Pork Stir-Fry with Chili Paste)",
    detail: "หมูกรอบทอดจนหนังฟูกรุบกรอบ คลุกเคล้าด้วยพริกเผารสเข้มข้นและผักสด",
    imageUrl:
      "https://img.freepik.com/free-photo/stir-fried-crispy-pork-with-chili-paste-plate_1339-81886.jpg?w=2000",
    price: "90 บาท",
    address: "ตลาดสามย่าน, กรุงเทพฯ",
    distanceKm: 1.5,
  },
  {
    id: 9,
    name: "ผัดซีอิ๊วหมู (Stir-Fried Rice Noodles with Pork and Soy Sauce)",
    detail: "เส้นใหญ่ผัดกับหมูนุ่ม ๆ ใส่คะน้าหรือผักอื่น ๆ ราดซีอิ๊วหอมหวาน",
    imageUrl:
      "https://img.freepik.com/free-photo/pad-see-ew-stir-fried-rice-noodles-with-pork-asian-meal_1339-154892.jpg?w=2000",
    price: "60 บาท",
    address: "ย่านประตูน้ำ, กรุงเทพฯ",
    distanceKm: 2.3,
  },
  {
    id: 10,
    name: "ข้าวผัดปู (Crab Fried Rice)",
    detail: "ข้าวผัดหอม ๆ ใส่เนื้อปูสดใหม่ ให้รสชาติเข้มข้น หวานเนื้อปู",
    imageUrl:
      "https://img.freepik.com/free-photo/thai-street-food-crab-fried-rice-plate_1339-102286.jpg?w=2000",
    price: "120 บาท",
    address: "ซอยทองหล่อ 5, กรุงเทพฯ",
    distanceKm: 3.1,
  },
  {
    id: 11,
    name: "ข้าวผัดสับปะรด (Pineapple Fried Rice)",
    detail: "ข้าวผัดในสับปะรดเพิ่มความหอมและหวาน ช่วยตัดเลี่ยนด้วยผักสดหลากสี",
    imageUrl:
      "https://img.freepik.com/free-photo/fried-rice-with-chicken-pineapple-served-pineapple_1150-43526.jpg?w=2000",
    price: "90 บาท",
    address: "ตลาดนัดรถไฟ รัชดา, กรุงเทพฯ",
    distanceKm: 2.9,
  },
  {
    id: 12,
    name: "ปอเปี๊ยะสด (Fresh Spring Rolls)",
    detail:
      "ปอเปี๊ยะสไตล์เวียดนามไส้ผักสด กุ้ง และสมุนไพร เสิร์ฟพร้อมน้ำจิ้มหวานเผ็ด",
    imageUrl:
      "https://img.freepik.com/free-photo/fresh-spring-rolls-wet-rice-paper-with-shrimp-lettuce-vegetables-plate_127032-2895.jpg?w=2000",
    price: "65 บาท",
    address: "ย่านอารีย์สัมพันธ์, กรุงเทพฯ",
    distanceKm: 1.7,
  },
  {
    id: 13,
    name: "หมี่กรอบ (Crispy Fried Noodles)",
    detail:
      "เส้นหมี่ทอดจนกรอบ เคลือบด้วยซอสรสเปรี้ยวหวาน มีกลิ่นหอมจากผิวส้มซ่า",
    imageUrl:
      "https://img.freepik.com/free-photo/close-up-noodles-with-chili-pepper-chopsticks_23-2148482653.jpg?w=2000",
    price: "55 บาท",
    address: "เยาวราช, กรุงเทพฯ",
    distanceKm: 3.5,
  },
  {
    id: 14,
    name: "น้ำแข็งใส (Thai Shaved Ice Dessert)",
    detail:
      "ขนมหวานคลายร้อน ราดด้วยนมข้นหรือน้ำหวานและท็อปปิ้งเช่น ถั่วแดง เฉาก๊วย หรือผลไม้",
    imageUrl:
      "https://img.freepik.com/free-photo/colorful-bowl-thai-dessert-nam-kang-sai_1339-86607.jpg?w=2000",
    price: "40 บาท",
    address: "ตลาดนัดสวนจตุจักร, กรุงเทพฯ",
    distanceKm: 2.8,
  },
  {
    id: 15,
    name: "ชานมไข่มุก (Bubble Milk Tea)",
    detail:
      "ชานมผสมน้ำเชื่อมสูตรพิเศษ มาพร้อมไข่มุกเหนียวหนึบ เคี้ยวสนุกเพลิน ๆ",
    imageUrl:
      "https://img.freepik.com/free-photo/bubble-tea-concept-with-glass_23-2148501833.jpg?w=2000",
    price: "60 บาท",
    address: "ซอยมหาดไทย, กรุงเทพฯ",
    distanceKm: 2.1,
  },
  {
    id: 16,
    name: "ข้าวหน้าเป็ด (Roasted Duck on Rice)",
    detail:
      "ข้าวร้อน ๆ ราดด้วยเป็ดย่างหนังกรอบ ราดน้ำราดเป็ดสูตรพิเศษ หอมกลิ่นเครื่องเทศ",
    imageUrl:
      "https://img.freepik.com/free-photo/top-view-roasted-duck-rice_1339-186828.jpg?w=2000",
    price: "70 บาท",
    address: "ถนนเยาวราช, กรุงเทพฯ",
    distanceKm: 1.3,
  },
  {
    id: 17,
    name: "ปลากะพงทอดน้ำปลา (Deep-Fried Sea Bass with Fish Sauce)",
    detail:
      "ปลากะพงทอดกรอบ ราดด้วยน้ำปลาปรุงรส เค็มหวานกำลังดี เสิร์ฟพร้อมยำมะม่วง",
    imageUrl:
      "https://img.freepik.com/free-photo/deep-fried-sea-bass-fish-with-shrimp-sauce_1339-167437.jpg?w=2000",
    price: "280 บาท",
    address: "ถนนประชาชื่น, กรุงเทพฯ",
    distanceKm: 2.6,
  },
  {
    id: 18,
    name: "น้ำพริกกะปิ (Shrimp Paste Chili Dip)",
    detail: "น้ำพริกกะปิรสจัดจ้าน เสิร์ฟพร้อมผักสด ผักลวก และปลาทูทอด",
    imageUrl:
      "https://img.freepik.com/free-photo/thai-shrimp-paste-chili-sauce-nam-prik-kapi-with-deep-fried-mackerel-boiled-vegetables_1150-43635.jpg?w=2000",
    price: "60 บาท",
    address: "ตลาดบางรัก, กรุงเทพฯ",
    distanceKm: 1.9,
  },
  {
    id: 19,
    name: "กล้วยบวชชี (Banana in Coconut Milk)",
    detail: "ของหวานไทยสุดคลาสสิก กล้วยน้ำว้าสุกพอดี เคี่ยวกับกะทิหอมหวาน",
    imageUrl:
      "https://img.freepik.com/free-photo/banana-coconut-milk-dessert-gang-buad-kluay-top-view_1150-43867.jpg?w=2000",
    price: "30 บาท",
    address: "ย่านรัชโยธิน, กรุงเทพฯ",
    distanceKm: 3.3,
  },
  {
    id: 20,
    name: "หอยทอด (Crispy Mussel Pancake)",
    detail: "แป้งบางกรอบใส่หอยแมลงภู่สด ๆ ผัดกับถั่วงอก เสิร์ฟพร้อมซอสพริก",
    imageUrl:
      "https://img.freepik.com/free-photo/thai-food-oyster-omelet-plate_1339-102287.jpg?w=2000",
    price: "70 บาท",
    address: "ตลาดนัดกลางคืน, กรุงเทพฯ",
    distanceKm: 2.0,
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
