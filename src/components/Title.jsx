import { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../main";
import gsap from "gsap";
import Logo from "../assets/small_tolbert&co.png";
import FourBars from "../animations/FourBars";
import DarkCircle from "../animations/DarkCircle";

export default function Title() {
  const { theme, highlight, chosen } = useContext(AppState);

  useEffect(() => {
    theme.value === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme.value]);

  useEffect(() => {
    const tl = gsap.timeline()
    gsap.to("#titleOne, #titleTwo", {
      duration: 2,
      ease: "rough",
      x: 0,
      opacity: 1,
    });

    tl.to("#piece, #moon", {
      duration: 1,
      
    })
  }, []);

  return (
    <>
      <main className="h-screen text-black dark:text-white  w-screen">
        <div className="flex flex-col gap-2 items-start justify-center h-full w-full">
          <div id="moon" className="border-[20px] border-t-amber-500 border-r-amber-500 border-b-amber-500 border-l-transparent absolute w-[400px] h-[400px] rounded-full"></div>
          <p
            id="titleOne"
            className="p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-500 text-9xl opacity-0 -translate-x-[100%]"
          >
            Hey! my name is Sean
          </p>
          <p
            id="titleTwo"
            className="p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-rose-500 text-9xl opacity-0 -translate-x-[100%]"
          >
            Come say Hi
          </p>
          <div id="piece" className="border-[20px] border-l-amber-500 border-y-transparent border-r-transparent absolute w-[400px] h-[400px] rounded-full"></div>
        </div>
      </main>
    </>
  );
}
