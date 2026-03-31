import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navber from "./components/Navber";
import Tools from "./components/Tools";

const toolsPromise = fetch("/tools.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navber />
      <Banner />

      <Suspense fallback={<p>Loading...</p>}>
        <Tools toolsPromise={toolsPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
