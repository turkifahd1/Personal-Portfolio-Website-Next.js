// app/projects/page.js
'use client'
// app/projects/page.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import ProjectDetail from '../project/[id]/page'; // استيراد ProjectDetail بشكل صحيح

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://node-js-backend-personal-portfolio.onrender.com/api');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://node-js-backend-personal-portfolio.onrender.com/api/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">قائمة المشاريع</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.images} alt={project.projectName} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-blue-500 mb-2">
                الرابط: <a href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.projectLink}</a>
              </p>
              <Link href={`/project/${project.id}`}> {/* تعديل الرابط ليتضمن /projects */}
                <a className="text-blue-500 mr-2 cursor-pointer">عرض التفاصيل</a> {/* استخدام a بدلاً من p وإضافة cursor-pointer */}
              </Link>
              <button className="text-red-500" onClick={() => handleDelete(project.id)}>حذف</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;





// 'use client'
// import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';

// export default function Projects() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://node-js-backend-personal-portfolio.onrender.com/api');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       setData(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);


  
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`https://node-js-backend-personal-portfolio.onrender.com/api/${id}`, {
//         method: 'DELETE'
//       });
//       if (!response.ok) {
//         throw new Error('Failed to delete data');
//       }
//       // إعادة تحميل البيانات بعد الحذف
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };





//   if (isLoading) return <p>Loading...</p>;
//   if (!data) return <p>No profile data</p>;

//   return (
//     <>
//       <div className="flex justify-center items-center">
//         <div className="rounded-lg shadow-lg p-6 border border-gray-300 w-3/4">
//           <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">آخر الأخبار</h1>
//           <div className="grid gap-6 justify-center">
//             {data.map(item => (
              
//               <div key={item.id} className="border border-gray-200 p-4 rounded-lg">
//                 <a href={`/news/${item.id}`}>
//                   <h2 className="flex justify-center items-center text-xl font-semibold mb-2 text-gray-800">{item.projectName}</h2>
//                   <p className="flex justify-end text-gray-700">{item.description}</p>
//                   <p className="flex justify-end text-gray-700"> {item.projectLink} <span className='font-semibold mb-2  text-gray-800'> :موقع الخبر</span> </p>
//                   <p className="flex justify-end text-gray-700"> {item.createdAt.substring(0, 10) } <span className='font-semibold mb-2  text-gray-800'> :تاريخ الخبر</span> </p>
//                 </a >
//                 <div className="flex justify-center mt-4">
//                 <a href={`/project/${item.id}`}>
//                   <button   className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">تعديل</button>
//                   </a>
//                   <button  onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">حذف</button>
//                 </div>
//               </div>
            
            
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
