import Link from 'next/link';

function Header() {
    return (
      <div>
      <nav className="bg-violet-500 p-4">
          <ul className="flex flex-col sm:flex-row justify-between items-center sm:ml-6 lg:ml-60"> 
            <li className="mb-4 sm:mb-0"> 
              <a href="/successStory">
                <h3 className="text-white hover:text-teal-200"> قصة نجاحي </h3>
              </a>
            </li>
            <li className="mb-4 sm:mb-0"> 
              <a href="/SendData">
                <h3 className="text-white hover:text-teal-200">كتابة مشروع جديد</h3>
              </a>
            </li>
            <li className="mb-4 sm:mb-0"> 
              <a href="/project">
                <h3 className="text-white hover:text-teal-200">صفحة المشاريع الجديده</h3>
              </a>
            </li>
            <li className="sm:mr-4">
              <a href="/">
                <div className="flex items-center">
                  <div>
                    <h1 className="text-lg sm:text-xl font-bold mr-4">عرض المشاريع الخاصه</h1> 
                    <h1 className="text-sm text-gray-200 mr-4">قناة تركي للمشاريع</h1>
                  </div>
                  <img src="/image/IMAGE.jpg" alt="صورة" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4" /> 
                </div>
              </a>
            </li>
          </ul>
        </nav>
    </div>
      
    );
}

export default Header;
