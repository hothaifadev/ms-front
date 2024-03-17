import Aos from "aos";
import { useEffect } from "react";

export type FragmentType = {
  title: string;
  description: string;
  image: string;
  alt: string;
  reverse: boolean;
};

export default function Fragment(props: FragmentType) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="relative text-center px-3 py-20  mx-auto mb-20">
      <div
        className="blur-3xl opacity-70 w-40 h-40 rounded-full bg-indigo-500/50 absolute left-2/3 top-1/3 transform -translate-x-1/2 -translate-y-1/2"
        aos-data="fade-up"
      ></div>
      <div className="blur-3xl opacity-70 w-40 h-40 rounded-full bg-default-500/50 absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div
        className={`block md:flex justify-between items-center ${
          props.reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="prose lg:max-w-lg lg:mx-auto">
          <h2 className="text-default-800 mb-10" aos-data="fade-up">
            {props.title}
          </h2>
          <p className="mb-7 md:mb-0"> {props.description}</p>
        </div>
        <img
          src={props.image}
          alt="صورة توضيحية للتصميم"
          className="md:max-w-md lg:max-w-2xl w-auto mx-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
}
