"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type MenuFormData = {
  name: string;
  description: string;
  price: number;
  image: FileList;
};

const CreateMenuPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MenuFormData>();

  // State สำหรับ Preview Image
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Watch ฟิลด์ในฟอร์ม
  const watchName = watch("name", "ตัวอย่างชื่อเมนู");
  const watchDescription = watch("description", "ตัวอย่างคำอธิบาย");
  const watchPrice = watch("price", 0);

  // ฟังก์ชันจัดการการเปลี่ยนรูปภาพ
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<MenuFormData> = (data) => {
    console.log(data);
    alert("เมนูของคุณถูกสร้างเรียบร้อยแล้ว!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ฟอร์มสร้างเมนู */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            สร้างเมนูอาหาร
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* ชื่อเมนู */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ชื่อเมนู
              </label>
              <input
                type="text"
                {...register("name", { required: "กรุณากรอกชื่อเมนู" })}
                placeholder="กรอกชื่อเมนู"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* คำอธิบาย */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                คำอธิบาย
              </label>
              <textarea
                {...register("description")}
                placeholder="กรอกคำอธิบายเมนู"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ราคา */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ราคา (บาท)
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "กรุณากรอกราคา",
                  min: { value: 1, message: "ราคาต้องมากกว่า 0" },
                })}
                placeholder="กรอกราคา"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.price && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* อัปโหลดรูปภาพ */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                อัปโหลดรูปภาพ
              </label>
              <input
                type="file"
                {...register("image", { required: "กรุณาอัปโหลดรูปภาพเมนู" })}
                onChange={handleImageChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              {errors.image && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* ปุ่มบันทึกเมนู */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                บันทึกเมนู
              </button>
            </div>
          </form>
        </div>

        {/* Preview Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">ตัวอย่างเมนู</h2>
          <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
            {/* รูปภาพตัวอย่าง */}
            {previewImage ? (
              <img
                src={previewImage}
                alt="Menu Preview"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm">ไม่มีรูป</span>
              </div>
            )}

            {/* ชื่อเมนู */}
            <h3 className="text-lg font-bold text-gray-800">{watchName}</h3>

            {/* คำอธิบาย */}
            <p className="text-gray-600 text-center mt-2">{watchDescription}</p>

            {/* ราคา */}
            <p className="text-blue-600 text-lg font-semibold mt-2">
              {watchPrice > 0 ? `${watchPrice} บาท` : "ยังไม่ได้กำหนดราคา"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMenuPage;
