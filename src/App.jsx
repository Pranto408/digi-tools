import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navber from "./components/Navber";
import Tools from "./components/Tools";
import Rating from "./components/Rating";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import Explore from "./components/Explore";

const toolsPromise = fetch("/tools.json").then((res) => res.json());

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navber carts={carts} />
      <Banner />
      <Rating />
      <Suspense fallback={<p>Loading...</p>}>
        <Tools toolsPromise={toolsPromise} carts={carts} setCarts={setCarts} />
      </Suspense>
      <GetStarted />
      <Pricing />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
