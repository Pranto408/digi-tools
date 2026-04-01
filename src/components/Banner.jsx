import BannerImage from "/banner.png";
import Group5 from "/Group 5.png";
import Play from "/Play.png";

const Banner = () => {
  return (
    <div className=" min-h-162.5 flex items-center overflow-hidden">
      <div className=" w-10/12 mx-auto mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  text-[#7525F8] text-sm font-medium px-5 py-2 rounded-full">
            <img src={Group5} alt="" /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span>Digital Workflow</span>
          </h1>

          <p className="text-lg text-[#627382] max-w-2xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  px-6 py-3  font-semibold text-lg shadow-xl flex items-center gap-3 rounded-full  text-white cursor-pointer">
              Explore Products
            </button>
            <button
              className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent transition-all px-6 py-3 border-2 border-[#9514FA] rounded-full font-semibold text-lg shadow-xl flex items-center gap-3
            cursor-pointer"
            >
              <img src={Play} alt="" /> Watch Demo
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-lg rounded-lg"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
