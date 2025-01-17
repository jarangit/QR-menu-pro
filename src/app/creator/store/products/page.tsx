"use client";
import React, { useState } from "react";

type Menu = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ListMenuPage: React.FC = () => {
  // ตัวอย่างข้อมูลเมนูอาหาร (สามารถเชื่อมต่อ API ได้)
  const [menus, setMenus] = useState<Menu[]>([
    {
      id: 1,
      name: "ข้าวผัดหมู",
      description: "ข้าวผัดพร้อมหมูและไข่",
      price: 50,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "ต้มยำกุ้ง",
      description: "ต้มยำรสจัดจ้านพร้อมกุ้งสด",
      price: 120,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleDeleteMenu = (id: number) => {
    const updatedMenus = menus.filter((menu) => menu.id !== id);
    setMenus(updatedMenus);
    alert("เมนูถูกลบเรียบร้อยแล้ว");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">รายการเมนูอาหาร</h1>
          <a
            href="/create-menu"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            + สร้างเมนูใหม่
          </a>
        </div>

        {/* List Menus */}
        {menus.length === 0 ? (
          <p className="text-gray-500 text-center">ยังไม่มีเมนูอาหาร</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menus.map((menu) => (
              <li
                key={menu.id}
                className="bg-gray-100 rounded-lg shadow-sm overflow-hidden"
              >
                {/* Image */}
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-32 object-cover"
                />
                {/* Menu Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {menu.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{menu.description}</p>
                  <p className="text-blue-600 text-lg font-semibold mt-2">
                    {menu.price} บาท
                  </p>
                  {/* Actions */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => alert(`แก้ไขเมนู: ${menu.name}`)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      แก้ไข
                    </button>
                    <button
                      onClick={() => handleDeleteMenu(menu.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ListMenuPage;
