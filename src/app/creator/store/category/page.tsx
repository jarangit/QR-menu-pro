"use client";
import React, { useState } from "react";

type Category = {
  id: number;
  name: string;
  description: string;
};

const ListCategoryPage: React.FC = () => {
  // ตัวอย่างข้อมูลหมวดหมู่ (สามารถเชื่อมต่อ API ได้)
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "อาหารจานหลัก", description: "อาหารสำหรับมื้อหลัก" },
    { id: 2, name: "ของหวาน", description: "เมนูของหวานและขนม" },
    { id: 3, name: "เครื่องดื่ม", description: "เมนูเครื่องดื่มต่างๆ" },
  ]);

  const handleDeleteCategory = (id: number) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">รายการหมวดหมู่</h1>
          <a
            href="/create-category"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            + สร้างหมวดหมู่ใหม่
          </a>
        </div>

        {/* List Categories */}
        {categories.length === 0 ? (
          <p className="text-gray-500 text-center">ยังไม่มีหมวดหมู่</p>
        ) : (
          <ul className="space-y-4">
            {categories.map((category) => (
              <li
                key={category.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  ลบ
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ListCategoryPage;
