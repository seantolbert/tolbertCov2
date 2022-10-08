import { useEffect, useRef } from "react";
import { useContext } from "react";
import { AppState } from "../main";
import gsap from "gsap";
// import Logo from "../assets/small_tolbert&co.png";
// import FourBars from "../animations/FourBars";
// import DarkCircle from "../animations/DarkCircle";

export default function Title() {
  const { theme } = useContext(AppState);
  const titleRef = useRef();

  useEffect(() => {
    theme.value === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme.value]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      "#moon, #piece, #moon2, #piece2",
      {
        x: "-400px",
      },
      {
        duration: 2,
        ease: "elastic.out",
        x: 0,
      }
    )
      .to("#moon, #piece", {
        duration: 2,
        boxShadow: "0px 0px 105px 45px rgba(252,211,77,0.9)",
      })
      .to(
        "#piece2, #moon2",
        {
          scaleY: 1.3,
          duration: 1,
          boxShadow: "0px 0px 105px 45px rgba(252,211,77,0.9)",
        },
        "-=1"
      )
      .fromTo(
        "#titleOne, #titleTwo",
        {
          x: "-2000px",
        },
        {
          duration: 2,
          ease: "rough",
          x: 0,
          opacity: 1,
        }
      )
      .to(
        "#moon, #piece",
        {
          x: "1000px",
          opacity: 0,
          duration: 3,
          repeat: -1,
        },
        "-=1"
      );
  }, []);

  // note! what if there was a cool pulsing ring effect on repeat where
  // these rings go over the words from the left as they are (gold rings ofc) and they faded away
  // before hitting the end of the screen

  // make the ring cover client height of the div over both title 1 nd title 2 and have the
  // ring travel to the end of that div's width so it can be viewd on mobile as well

  return (
    <>
      <main className="h-screen text-black dark:text-white w-screen overflow-hidden">
        <div className="flex flex-col gap-2 items-start justify-center h-full w-full">
          <div
            id="moon"
            className="scale-x-50 border-[20px] border-t-amber-300  border-r-amber-300  border-b-amber-300  border-l-transparent absolute w-[400px] h-[400px] rounded-full"
          ></div>
          <div
            id="moon2"
            className="border-[20px] scale-x-50 border-t-amber-300  border-r-amber-300  border-b-amber-300  border-l-transparent absolute w-[400px] h-[400px] rounded-full"
          ></div>
          <p
            id="titleOne"
            ref={titleRef}
            className="p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-500 text-9xl z-[1]"
          >
            Hey! my name is Sean
          </p>
          <p
            id="titleTwo"
            className="p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-rose-500 text-9xl z-[1]"
          >
            Come say Hi
          </p>
          <div
            id="piece"
            className="z-[2] scale-x-50 border-[20px] border-l-amber-300 border-y-transparent border-r-transparent absolute w-[400px] h-[400px] rounded-full"
          ></div>
          <div
            id="piece2"
            className="z-[2] border-[20px] scale-x-50 border-l-amber-300  border-y-transparent border-r-transparent absolute w-[400px] h-[400px] rounded-full"
          ></div>
        </div>
      </main>
    </>
  );
}
