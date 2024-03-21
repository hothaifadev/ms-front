import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type appProps = {
  children: ReactNode;
};

const App = (props: appProps) => {
  return (
    <>
      <Header />
      <main
        className="h-full w-full"
        style={{ fontFamily: `"ping-ar", sans-serif` }}
      >
        {/* Content Child slot */}
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default App;
