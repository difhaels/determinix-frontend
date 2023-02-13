import { useNavigate } from "react-router-dom";
import DXlogo3 from "./img/logo/DX-logo-3.png";
import triangle from "./img/icon/Red_Triangle.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const toHome = () => navigate("main");
  const toProject = () => navigate("project");
  const toAbout = () => navigate("about");
  const homeIcon = () => {
    const home = document.querySelector(".home");
    const project = document.querySelector(".project");
    const about = document.querySelector(".about");
    home.classList.remove("hidden");
    project.classList.add("hidden");
    about.classList.add("hidden");
  };
  const projectIcon = () => {
    const home = document.querySelector(".home");
    const project = document.querySelector(".project");
    const about = document.querySelector(".about");
    home.classList.add("hidden");
    project.classList.remove("hidden");
    about.classList.add("hidden");
  };
  const aboutIcon = () => {
    const home = document.querySelector(".home");
    const project = document.querySelector(".project");
    const about = document.querySelector(".about");
    home.classList.add("hidden");
    project.classList.add("hidden");
    about.classList.remove("hidden");
  };
  return (
    <nav className="fixed z-50 w-full">
      <div className="flex justify-between items-center px bg-[#131313] opacity-90 relative">
        <div>
          <img src={DXlogo3} alt="dxlogo" width="85" className="p-3 my-2" />
        </div>
        {/* desktop */}
        <div className="sm:flex gap-10 text-slate-50 px-3 text-xl items-center hidden">
          <button
            onClick={() => {
              toHome();
              homeIcon();
            }}
            className="relative hover:text-slate-300"
          >
            <img src={triangle} width="15px" className="absolute left-5 -top-5 home hidden" />
            Home
          </button>
          <button
            onClick={() => {
              toProject();
              projectIcon();
            }}
            className="relative hover:text-slate-300"
          >
            <img src={triangle} width="15px" className="absolute left-5 -top-5 project hidden" />
            Project
          </button>
          <button
            onClick={() => {
              toAbout();
              aboutIcon();
            }}
            className="relative hover:text-slate-300"
          >
            <img src={triangle} width="15px" className="absolute left-5 -top-5 about hidden" />
            About
          </button>
        </div>

        {/* mobile */}
        <div className="gap-3 py-2 rounded-md text-slate-50 px-3 text-xl items-center sm:hidden absolute bg-slate-600 right-3 top-24 hidden" id="nav">
          <button onClick={() => navigate("main")} className="block pb-1">
            Home
          </button>
          <button onClick={() => navigate("project")} className="block pb-1">
            Project
          </button>
          <button onClick={() => navigate("about")} className="block">
            About
          </button>
        </div>
        <div
          className="grid gap-[6px] sm:hidden"
          onClick={function navMobile() {
            const nav = document.querySelector("#nav");
            nav.classList.toggle("hidden");
          }}
        >
          <div className="bg-slate-100 w-[40px] h-[10px]"></div>
          <div className="ml-[15px] bg-slate-50 w-[25px] h-[10px]"></div>
        </div>
      </div>
    </nav>
  );
}
