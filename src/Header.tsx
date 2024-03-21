import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

type navigationType = {
  title: string;
  path: string;
}[];
export default function Header() {
  const [state, setState] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });
  const navigation: navigationType = [
    { title: "الرئيسية", path: "#" },
    { title: "حول", path: "#" },
    { title: "الاسعار", path: "/#pricing" },
    { title: "احجز الان", path: "/register" },
  ];

  return (
    <>
      <header
        className={`md:fixed relative top-0 left-0 w-full z-50 backdrop-blur-lg py-3 md:py-0 ${
          scroll ? "bg-white/90" : "bg-transparent"
        }`}
      >
        <nav className="relative items-center px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
          <div className="flex justify-between">
            <a href="/">
              <img
                src="https://altatweertech.com/images/tatweer%20logo%20200x40.png"
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
                <IoClose className="w-6 h-6" />
              ) : (
                <RxHamburgerMenu className="w-6 h-6" />
              )}
            </button>
          </div>
          <ul
            className={`bg-white md:bg-inherit shadow-md rounded-md p-4 flex-1 absolute z-50 top-8 right-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto ${
              state ? "" : "hidden"
            }`}
          >
            <div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-y-0 sm:gap-x-10">
              {navigation.map((item, idx) => (
                <li
                  className="text-default-500 md:text-default-700 font-medium hover:text-default-600"
                  key={`nav-${idx}`}
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
