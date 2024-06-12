

'use client'; // تأكد من أنك تعمل على مكون عميل

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NewsDetail({ params }) {
  const projects = params.projects;

  const [data, setData] = useState({   projectName: '',description: '',projectLink: '',images:'' });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({  projectName: '',description: '',projectLink: '',images:''  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://node-js-backend-personal-portfolio.onrender.com/api/${projects}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setFormData({ projectName: data.projectName, description: data.description ,projectLink:data.projectLink, images: data.images });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [projects]);

  const handleEdit = () => {
    setIsEditing(true);
  };
   
   //فنكشن
   const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({
        ...formData,
        images: reader.result, // تحديث الصورة في البيانات النموذجية
      });
    };
  };
  


  const handleSave = async () => {
    try {
      const response = await fetch(`https://node-js-backend-personal-portfolio.onrender.com/api/${projects}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      setData(formData);
      setIsEditing(false);
      alert('تم تحديث البيانات بنجاح!');
    } catch (error) {
      console.error('Error updating data:', error);
      alert('حدثت مشكلة أثناء تحديث البيانات. يرجى المحاولة مرة أخرى!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        {isEditing ? (
          <>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e)}
            className="py-2 px-4 border border-gray-300 rounded mb-4 w-full"
          />

            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="input-field py-2 px-4 border border-gray-300 rounded mb-4 w-full"
              placeholder="عنوان الخبر الجديد"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input-field py-2 px-4 border border-gray-300 rounded mb-4 w-full"
              placeholder="موضوع الخبر الجديد"
            />
            <input
      type="text"
      name="projectLink"
      value={formData.projectLink}
      onChange={handleChange}
      className="input-field py-2 px-4 border border-gray-300 rounded mb-4 w-full"
      placeholder="المكان"
    />

          </>
        ) : (
          <>
          <img src={data.images}/>
            <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">{data.projectName}</h1>
            <p className="text-gray-700 text-center">{data.description}</p>
            <p className="text-gray-700 text-center">{data.projectLink}</p>
          </>
        )}
        <div className="flex justify-center mt-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              حفظ التغييرات
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              تعديل العنوان والخبر
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
