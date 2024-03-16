import { useState } from "react";

const Hero = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "الرئيسية", path: "javascript:void(0)" },
    { title: "حول", path: "javascript:void(0)" },
    { title: "الاسعار", path: "javascript:void(0)" },
    { title: "تواصل معنا", path: "javascript:void(0)" },
  ];

  return (
    <>
      <header>
        <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
          <div className="flex justify-between">
            <a href="javascript:void(0)">
              <img
                src="https://altatweertech.com/images/tatweer%20logo%20200x40.png"
                className="shadow-xl"
                width={120}
                height={50}
                alt="صورة توضيحية للتصميم"
              />
            </a>
            <button
              className="text-gray-500 outline-none sm:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`bg-white shadow-md rounded-md p-4 flex-1 mt-12 absolute z-20 top-8 right-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto ${
              state ? "" : "hidden"
            }`}
          >
            <div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-y-0 sm:gap-x-10">
              {navigation.map((item, idx) => (
                <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left rtl:lg:text-right">
          <h1 className="text-gray-800 font-bold text-4xl xl:text-6xl">
            إحجز
            <span className="text-default-600"> ستيم </span>
            الخاص
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto ltr:lg:ml-0 rtl:mr-0">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة
          </p>
          <div>
            <p className="text-gray-800 py-3"></p>
            <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start gap-x-6">
              <button className="outline-none bg-default-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-default-700 focus:ring-2  sm:w-auto">
                احصل على نسخة تجريبية
              </button>
              <button className="px-4 py-3 text-default-600 bg-default-50 rounded-lg duration-150 hover:bg-default-100 active:bg-default-200 ">
                تواصل معنا
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3 py-10">
          <img
            src="/images/1.jpg"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
