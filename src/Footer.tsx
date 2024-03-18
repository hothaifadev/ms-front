import { FaCrown } from "react-icons/fa6";

export default function Footer() {
  const enabled = false; //TODO: Enable this
  const footerNavs = [
    {
      href: "#about",
      name: "حول",
    },

    {
      href: "#pricing",
      name: "الاسعار",
    },
    {
      href: "#contact-us",
      name: "تواصل معنا",
    },
    {
      href: "#faq",
      name: "FAQ",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src="https://altatweertech.com/images/tatweer%20logo%20200x40.png"
          className="w-32 sm:mx-auto"
        />
        <p className="leading-relaxed mt-2 text-[15px]">
          تم توليد هذا النص من مولد النص العربى، حيث يمكنك توليد هذا النص من
          مولد النص العربى، حيث يمكنك تم توليد هذا النص من مولد النص العربى، حيث
          يمكنك توليد هذا النص من مولد النص العربى، حيث يمكنك
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex gap-x-5 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-gray-800" key={`footer-nav-${idx}`}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; جميع الحقوق محفوظة لدى شركة التطوير للحلول البرمجية{" "}
          {new Date().getFullYear()}
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {enabled ? (
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="#">
                  <FaCrown />
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
