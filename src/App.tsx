import { Component } from "react";
import Hero from "./Hero";
import Aos from "aos";
export default class App extends Component {
  componentDidMount(): void {
    Aos.init();
  }
  render() {
    return (
      <main
        className="h-full font-ping-ar w-full"
        style={{ fontFamily: "ping-ar" }}
      >
        <Hero />
        <section className="py-10">
          <div className="prose mx-auto text-center">
            <h1 className="text-center text-default-800">
              نظام متكامل واجهة وبرمجة الخلفية!
            </h1>
            <p className="text-default-800/80 font-medium ">
              تطيبق وموقع الكتروني متكامل مع لوحة تحكم احترافية لإدارها بكل
              سهولة.
            </p>
            <p className="text-center text-sm font-light text-gray-600">
              قامت شركة التطوير التقنية بإنشاء هذا البرنامج بحيث يمكن لأصحاب
              المطاعم والمطاعم متعددة السلاسل بسهولة إدارة القائمة والأوامر
              والمخزون بالتفصيل التقارير والتحليلات.
            </p>
          </div>
        </section>
      </main>
    );
  }
}
