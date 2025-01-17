"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  description: string;
  address: string;
  phone: string;
  image: FileList;
};

const CreateRestaurant: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert("ร้านของคุณถูกสร้างเรียบร้อยแล้ว!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        สร้างร้านอาหารของคุณ
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* ชื่อร้าน */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ชื่อร้านอาหาร
          </label>
          <input
            type="text"
            {...register("name", { required: "กรุณากรอกชื่อร้านอาหาร" })}
            placeholder="กรอกชื่อร้าน"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* คำอธิบาย */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            คำอธิบาย
          </label>
          <textarea
            {...register("description")}
            placeholder="กรอกคำอธิบายร้าน"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ที่อยู่ */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ที่อยู่
          </label>
          <input
            type="text"
            {...register("address", { required: "กรุณากรอกที่อยู่" })}
            placeholder="กรอกที่อยู่"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.address && (
            <p className="text-sm text-red-500 mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* เบอร์โทร */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            เบอร์โทรศัพท์
          </label>
          <input
            type="text"
            {...register("phone", {
              required: "กรุณากรอกเบอร์โทรศัพท์",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)",
              },
            })}
            placeholder="กรอกเบอร์โทรศัพท์"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* อัปโหลดรูปภาพ */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            อัปโหลดโลโก้หรือรูปภาพร้าน
          </label>
          <input
            type="file"
            {...register("image", { required: "กรุณาอัปโหลดรูปภาพร้าน" })}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
          {errors.image && (
            <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* ปุ่มสร้างร้าน */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            สร้างร้านอาหาร
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRestaurant;
