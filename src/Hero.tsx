import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Header";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  // Replace # path with your path

  return (
    <>
      <Header />
      <div className="reactive">
        <div className="ball1 w-40 h-40 blur-3xl bg-default-600/50 absolute rounded-full left-10 top-10"></div>
        <div className="ball1 w-72 h-72 blur-3xl bg-default-400/30 absolute rounded-full right-10 lg:right-1/3 top-36"></div>
      </div>
      <div className="relative bg-default-50">
        <img src="/images/Vector 2.svg" alt="" className="absolute left-0" />
        <section className="mx-auto max-w-screen-2xl px-4 items-center lg:grid grid-cols-1 md:grid-cols-2 md:px-8 pt-40">
          <div className="space-y-4 mx-auto sm:text-center lg:text-left rtl:lg:text-right">
            <h1
              className="text-default-700 font-bold text-4xl xl:text-5xl text-center"
              aos-data="fade-right"
            >
              إحجز
              <span className="text-default-700" data-aos="fade-down">
                {" "}
                منيو ستِم{" "}
              </span>
              الخاص بك
            </h1>
            <p
              className="text-default-900 max-w-xl leading-relaxed sm:mx-auto ltr:lg:ml-0 rtl:mr-0 font-medium text-center"
              data-aos="fade-up"
            >
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة
            </p>
            <div>
              <p className="text-gray-800 py-3"></p>
              <form className="grid justify-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-center gap-x-6">
                <button
                  className="outline-none bg-default-700 text-white text-center px-4 py-3 rounded-2xl w-full ring-offset-1 ring-default-700 focus:ring-2  sm:w-auto shadow-sm hover:shadow-md duration-300"
                  data-aos="fade-up"
                >
                  احصل على نسخة تجريبية
                </button>
                <button className="px-4 py-3 text-default-700 rounded-2xl duration-150 active:ring ring-default-300 hover:shadow-md shadow-sm border-t border-default-400 border ring-offset-1">
                  تواصل معنا
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3 py-10">
            <img
              data-aos="fade-up"
              src="/images/te.png"
              className="w-full rounded-3xl mx-auto sm:w-10/12  lg:w-full shadow-lg h-auto"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
