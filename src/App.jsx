import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navber from "./components/Navber";
import Tools from "./components/Tools";

const toolsPromise = fetch("/tools.json").then((res) => res.json());

function App() {
    const [carts, setCarts] = useState([]);
    // console.log(carts);
  return (
    <>
      <Navber />
      <Banner />

      <Suspense fallback={<p>Loading...</p>}>
        <Tools toolsPromise={toolsPromise} carts={carts} setCarts={setCarts} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
