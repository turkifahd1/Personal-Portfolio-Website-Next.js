// SuccessStory.js

import Head from 'next/head';

export default function SuccessStory() {
  return (
    <div>
      <Head>
        <title>قصتي نحو النجاح</title>
        <meta name="description" content="قصة نجاح في Next.js" />
      
      </Head>

      <main>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-28 w-28" src="/image/IMAGE.jpg" alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">قصتي نحو النجاح</h2>
            </div>
            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-700">
                إليك قصتي الشخصية ورحلتي نحو النجاح في تطوير البرمجيات. بدأت رحلتي كمطور مبتدئ، ومن خلال العمل الجاد والتعلم المستمر، تمكنت من تحقيق الكثير من الإنجازات والنجاحات في مجالي.
              </p>
              <p className="text-lg text-gray-700">
                تعلمت العديد من التقنيات الحديثة والأساليب الفعّالة في تطوير البرمجيات، وكنت دائمًا متحمسًا لمشاركة المعرفة والخبرة مع الآخرين من خلال الكتابة والتحدث في المؤتمرات وورش العمل.
              </p>
              <p className="text-lg text-gray-700">
                اليوم، أشعر بالفخر بكل ما تحققته وأنا مستعد لمواصلة النمو والتطور ومساعدة الآخرين في تحقيق أهدافهم وتحقيق النجاح في مجال التكنولوجيا.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
