import { FaCrown } from "react-icons/fa6";

export default function Footer() {
  const footerNavs = [
    {
      href: "#",
      name: "About",
    },
    {
      href: "#",
      name: "Blog",
    },
    {
      href: "#",
      name: "",
    },
    {
      href: "#",
      name: "Team",
    },
    {
      href: "#",
      name: "Careers",
    },

    {
      href: "#",
      name: "Suuport",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src="https://www.floatui.com/logo.svg"
          className="w-32 sm:mx-auto"
        />
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-gray-800">
            <a key={`footer-nav-${idx}`} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 Float UI All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="#">
                <FaCrown />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <FaCrown />
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center"></li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center"></li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
}
