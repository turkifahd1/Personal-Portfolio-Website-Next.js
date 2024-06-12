

import Link from 'next/link';


function Home() {
  

  
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center mb-96 ">
              
                 
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center ">
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <img src="/image/IMAGE.jpg" className="rounded-full w-80 h-80 object-cover shadow-lg" alt="صورتك الشخصية" />
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-4 ml-48">قصة نجاحي</h1>
                    <p className="text-lg mb-4">
                        مرحبًا، أنا تركي النهدي. منذ سنوات قليلة، بدأت رحلتي في عالم البرمجة والتكنولوجيا بدون أي خلفية علمية في هذا المجال.
                        بفضل الجهد المستمر والتعلم الذاتي، استطعت تطوير مهاراتي والعمل على عدة مشاريع ناجحة.
                        أحد أهم إنجازاتي كان تطوير تطبيق يستخدمه الآن آلاف الأشخاص حول العالم.
                        قصتي هي دليل على أن الشغف والمثابرة يمكن أن يؤديا إلى تحقيق الأحلام، بغض النظر عن الصعوبات. ومريت الكثير من العقبات لاكن تخطيتها بالمثايرة والنجاح وكانت اخر سنه لي فترة ضياع لاتدري اين تذهب الا بعد ان طبقت في شركة smart Ginx
                    </p>
                    <Link href="/project">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
                            عرض المشاريع
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
