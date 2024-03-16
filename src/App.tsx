import { Component } from "react";
import Hero from "./Hero";
import Aos from "aos";
export default class App extends Component {
  componentDidMount(): void {
    Aos.init();
  }
  render() {
    return (
      <main className="h-full font-ping-ar" style={{ fontFamily: "ping-ar" }}>
        <Hero />
        <div className="py-4">dddddddd</div>
      </main>
    );
  }
}
