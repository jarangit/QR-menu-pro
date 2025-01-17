"use client";
import React, { useState } from "react";

type Category = {
  id: number;
  name: string;
  description: string;
};

const CreateCategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCategory = () => {
    if (!categoryName) {
      alert("กรุณากรอกชื่อหมวดหมู่");
      return;
    }

    const newCategory: Category = {
      id: Date.now(),
      name: categoryName,
      description: description || "",
    };

    setCategories([...categories, newCategory]);
    setCategoryName("");
    setDescription("");
    alert("หมวดหมู่ถูกสร้างเรียบร้อยแล้ว!");
  };

  const handleDeleteCategory = (id: number) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          สร้างหมวดหมู่เมนูอาหาร
        </h1>
        {/* ฟอร์มสร้างหมวดหมู่ */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ชื่อหมวดหมู่
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="กรอกชื่อหมวดหมู่"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              คำอธิบาย
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="กรอกคำอธิบาย (ถ้ามี)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              onClick={handleAddCategory}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              บันทึกหมวดหมู่
            </button>
          </div>
        </div>

        {/* รายการหมวดหมู่ */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            รายการหมวดหมู่
          </h2>
          {categories.length === 0 ? (
            <p className="text-gray-500">ยังไม่มีหมวดหมู่</p>
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
    </div>
  );
};

export default CreateCategoryPage;
