import { useEffect } from "react";
import Hero from "./Hero";
import Aos from "aos";
import Fragment, { FragmentType } from "./components/fragment";
const App = () => {
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
    </main>
  );
};

export default App;
