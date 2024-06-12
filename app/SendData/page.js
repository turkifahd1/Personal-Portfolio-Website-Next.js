
'use client'
import React, { useState } from 'react';


export default function newsArticalPage(){
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    projectLink: '',
    images:''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://node-js-backend-personal-portfolio.onrender.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      // تم إرسال البيانات بنجاح
      alert('تم إرسال البيانات بنجاح!');
      // إعادة تعيين الحالة لتفريغ النموذج
      setFormData({
        projectName: '',
        description: '',
        projectLink: '',
        images: ''

        
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      // فشل في إرسال البيانات
      alert('حدثت مشكلة أثناء إرسال البيانات. يرجى المحاولة مرة أخرى!');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="h-14 w-14 bg-gray-200 rounded-full flex flex-shrink-0 justify-center items-center text-gray-500 text-2xl font-mono"><img src="/image/IMAGE.jpg"></img></div>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Send Data to projects</h2>
                                    <p className="text-sm text-gray-500 font-normal leading-relaxed">Fill in the details below to send data to the API.</p>
                                </div>
                            </div>
                            <form className="mt-8" onSubmit={handleSubmit}>
                                <div className="relative border-b-2 focus-within:border-blue-500 focus-within:text-blue-500">
                                    <input type="text" name="projectName" id="projectName" className="pb-2 border-b-2 appearance-none focus:outline-none focus:border-blue-500 block w-full px-2 py-2 bg-transparent" placeholder="Project Name" value={formData.projectName} onChange={handleChange} />
                                </div>
                                <div className="mt-8">
                                    <textarea name="description" id="description" className="pb-2 border-b-2 appearance-none focus:outline-none focus:border-blue-500 block w-full px-2 py-2 bg-transparent" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
                                </div>
                                <div className="relative mt-8">
                                    <input type="text" name="projectLink" id="projectLink" className="pb-2 border-b-2 appearance-none focus:outline-none focus:border-blue-500 block w-full px-2 py-2 bg-transparent" placeholder="Project Link" value={formData.projectLink} onChange={handleChange} />
                                </div>
                                <div className="mt-8">
                                    <input type="file" name="images" id="images" className="pb-2 border-b-2 appearance-none focus:outline-none focus:border-blue-500 block w-full px-2 py-2 bg-transparent" onChange={handleChange} />
                                </div>
                                <div className="mt-8">
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Send Data</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
  
  
}
