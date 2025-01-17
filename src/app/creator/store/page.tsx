"use client";
import React, { useState } from "react";

const RestaurantHomePage: React.FC = () => {
  // ตัวอย่างข้อมูลหมวดหมู่และเมนูอาหาร
  const categories = [
    {
      id: 1,
      name: "อาหารจานหลัก",
      menus: [
        { id: 1, name: "ข้าวผัดหมู", price: 50 },
        { id: 2, name: "ต้มยำกุ้ง", price: 120 },
      ],
    },
    {
      id: 2,
      name: "ของหวาน",
      menus: [{ id: 3, name: "ไอศกรีม", price: 40 }],
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(categories[0].id); // Tab เริ่มต้น
  const [showQRCode, setShowQRCode] = useState(false); // State สำหรับแสดง QR Code


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          {/* Restaurant Logo */}
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-lg font-semibold">Logo</span>
          </div>

          {/* Restaurant Name */}
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            ชื่อร้านอาหารของคุณ
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-center mt-2">
            ยินดีต้อนรับสู่ร้านของคุณ! เริ่มต้นสร้างเมนูอาหารของคุณได้เลย
          </p>
        </div>
      </div>

      {/* Action Section */}
      <div className="max-w-4xl mx-auto mt-6 flex justify-between items-center">
        <button className="bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          + สร้างเมนูอาหาร
        </button>
        <button
          onClick={() => setShowQRCode(true)} // เปิด Modal QR Code
          className="bg-green-600 text-white py-3 px-4 rounded-lg text-lg font-medium hover:bg-green-700 transition"
        >
          แสดง QR Code
        </button>
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              QR Code สำหรับหน้าร้านของคุณ
            </h2>

            <p className="text-gray-600 text-center mt-4">
              สแกน QR Code เพื่อเข้าชมหน้าร้าน
            </p>
            <button
              onClick={() => setShowQRCode(false)} // ปิด Modal QR Code
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition w-full"
            >
              ปิด
            </button>
          </div>
        </div>
      )}

      {/* Tab Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-800">เมนูอาหาร</h2>
        <div className="mt-4 border-b border-gray-200">
          <ul className="flex">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`cursor-pointer px-4 py-2 text-gray-700 ${
                  activeTab === category.id
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "hover:text-blue-600"
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Items */}
        <div className="mt-6">
          {categories
            .filter((category) => category.id === activeTab)
            .map((category) => (
              <ul key={category.id} className="space-y-4">
                {category.menus.map((menu) => (
                  <li
                    key={menu.id}
                    className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                  >
                    <span className="text-gray-800 font-medium">
                      {menu.name}
                    </span>
                    <span className="text-blue-600 font-semibold">
                      {menu.price} บาท
                    </span>
                  </li>
                ))}
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantHomePage;
