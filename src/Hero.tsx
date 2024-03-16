import Aos from "aos";
import "aos/dist/aos.css";
import { Component } from "react";

type HeroState = {
  navigation: {
    title: string;
    path: string;
  }[];
  state: boolean;
};

export default class Hero extends Component<unknown, HeroState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      state: false,
      navigation: [
        { title: "الرئيسية", path: "#" },
        { title: "حول", path: "#" },
        { title: "الاسعار", path: "#" },
        { title: "تواصل معنا", path: "#" },
        { title: "تست", path: "#" },
      ],
    };
  }
  componentDidMount(): void {
    Aos.init();
  }

  toggleState = () => {
    this.setState((prevState) => ({ state: !prevState.state }));
  };

  // Replace # path with your path

  render() {
    return (
      <>
        <header className="md:fixed top-0 left-0 w-full border-b z-50 bg-white/80 backdrop-blur-lg">
          <nav className="relative items-center px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
            <div className="flex justify-between">
              <a href="#">
                <img
                  src="https://altatweertech.com/images/tatweer%20logo%20200x40.png"
                  width={120}
                  height={50}
                  alt="صورة توضيحية للتصميم"
                />
              </a>
              <button
                className="text-gray-500 outline-none sm:hidden"
                onClick={() => this.toggleState()}
              >
                {this.state ? (
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
              className={`bg-white md:bg-inherit shadow-md rounded-md p-4 flex-1 absolute z-20 top-8 right-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto ${
                this.state ? "" : "hidden"
              }`}
            >
              <div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-y-0 sm:gap-x-10">
                {this.state.navigation.map((item, idx) => (
                  <li
                    className="text-gray-500 md:text-gray-700 font-medium hover:text-default-600"
                    key={idx}
                  >
                    <a href={item.path}>{item.title}</a>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </header>
        <div className="reactive">
          <div className="ball1 w-40 h-40 blur-3xl bg-default-600/50 absolute rounded-full left-10 top-10"></div>
          <div className="ball1 w-72 h-72 blur-3xl bg-default-400/30 absolute rounded-full right-1/3 top-36"></div>
        </div>
        <div className="relative bg-gradient-to-tl from-default-300 to-default-400">
          <img src="/images/Vector 2.svg" alt="" className="absolute left-0" />
          <section className="mx-auto max-w-screen-xl px-4 items-center lg:grid md:px-8  pt-40">
            <div className="space-y-4 mx-auto sm:text-center lg:text-left rtl:lg:text-right">
              <h1
                className="text-default-100 font-bold text-4xl xl:text-6xl text-center"
                aos-data="fade-right"
              >
                إحجز
                <span className="text-default-700" data-aos="fade-down">
                  {" "}
                  ستِم{" "}
                </span>
                الخاص
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
                <form className="flex justify-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-center gap-x-6">
                  <button
                    className="outline-none bg-default-700 text-white text-center px-4 py-3 rounded-2xl w-full ring-offset-2 ring-default-700 focus:ring-2  sm:w-auto shadow-sm hover:shadow-md duration-300"
                    data-aos="fade-up"
                  >
                    احصل على نسخة تجريبية
                  </button>
                  <button className="px-4 py-3 text-default-700 bg-default-200 rounded-2xl duration-150 hover:bg-default-200 active:bg-default-200 hover:shadow-md shadow-sm border-t border-default-400 border-r border-r-default-400">
                    تواصل معنا
                  </button>
                </form>
              </div>
            </div>
            <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3 py-10">
              <img
                data-aos="fade-up"
                src="/images/te.png"
                className="w-full rounded-3xl mx-auto sm:w-10/12  lg:w-full shadow-lg"
              />
            </div>
          </section>
        </div>
      </>
    );
  }
}
