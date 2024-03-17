import { useEffect } from "react";
import Hero from "./Hero";
import Aos from "aos";
import Fragment, { FragmentType } from "./components/fragment";
import { RiHeartsFill } from "react-icons/ri";
import { FaCrown } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";

import Pricing, { PriceListProps } from "./components/Pricing";

const App = () => {
  const lists: PriceListProps[] = [
    {
      title: "أساسي",
      price: "IQD25,000",
      icon: RiHeartsFill,
      promotion: "مناسبة للبدء معنا",
      lists: [
        {
          title: "تطبيق موبايل وموقع الكتروني وادارتها بشكل كامل",
          checked: true,
        },
      ],
    },
    {
      title: "إحترافي",
      price: "IQD75,000",
      badge: "مميز",
      promotion: "ادر مشروعك بكل احترافية بكامل الادوات اللازمة.",
      icon: FaCrown,
      lists: [
        {
          title: "تطبيق موبايل وموقع الكتروني وادارتها بشكل كامل",
          checked: true,
        },
      ],
    },
    {
      title: "بدون حدود",
      promotion: "اطلق تجارتك بكل قوة.!",
      price: "IQD75,000",
      icon: FaFireAlt,
      lists: [
        {
          title: "تطبيق موبايل وموقع الكتروني وادارتها بشكل كامل",
          checked: true,
        },
      ],
    },
  ];

  const fragments: FragmentType[] = [
    {
      title: "تطبيق موبايل وموقع الكتروني وادارتها بشكل كامل",
      description: `قامت شركة التطوير التقنية بإنشاء هذا البرنامج بحيث يمكن لأصحاب
            المطاعم والمطاعم متعددة السلاسل بسهولة إدارة القائمة والأوامر
            والمخزون بالتفصيل التقارير والتحليلات.`,
      image: "/images/2.jpg",
      alt: "صورة توضيحية للتصميم",
      reverse: true,
    },
    {
      title: "تطبيق موبايل وموقع الكتروني وادارتها بشكل كامل",
      description: `قامت شركة التطوير التقنية بإنشاء هذا البرنامج بحيث يمكن لأصحاب
            المطاعم والمطاعم متعددة السلاسل بسهولة إدارة القائمة والأوامر
            والمخزون بالتفصيل التقارير والتحليلات.`,
      image: "/images/demo-moblie.png",
      alt: "صورة توضيحية للتصميم",
      reverse: false,
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main
      className="h-full font-ping-ar w-full"
      style={{ fontFamily: "ping-ar" }}
    >
      <Hero />
      <section className="py-10">
        <div className="prose mx-auto text-center mb-10">
          <h1 className="text-center text-default-800" aos-data="fade-right">
            نظام متكامل واجهة وبرمجة الخلفية!
          </h1>
          <p className="text-default-800/80 font-medium ">
            تطيبق وموقع الكتروني متكامل مع لوحة تحكم احترافية لإدارها بكل سهولة.
          </p>
          <p className="text-center text-sm font-light text-gray-600">
            قامت شركة التطوير التقنية بإنشاء هذا البرنامج بحيث يمكن لأصحاب
            المطاعم والمطاعم متعددة السلاسل بسهولة إدارة القائمة والأوامر
            والمخزون بالتفصيل التقارير والتحليلات.
          </p>
        </div>
        {fragments.map((fragment) => (
          <Fragment
            key={fragment.title}
            title={fragment.title}
            description={fragment.description}
            image={fragment.image}
            alt={fragment.alt}
            reverse={fragment.reverse}
          />
        ))}
      </section>
      <section className="py-10 container mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {lists.map((list) => (
            <Pricing key={list.title} {...list} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
