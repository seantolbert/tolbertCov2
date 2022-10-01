import React, { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../../main";
import gsap from "gsap";
import StreamBar from "./StreamBar";

export default function FourBars() {
  const { chosen, highlight } = useContext(AppState);

  useEffect(() => {
    gsap.fromTo(
      "#highlightBar",
      {
        opacity: 0,
      },
      {
        // zIndex: 4,
        opacity: 1,
        duration: 0.4,
        ease: "ease",
      }
    );
    gsap.fromTo(
      "#chosenBar",
      {
        opacity: 0,
      },
      {
        // zIndex: 5,
        opacity: 1,
        duration: 0.4,
        ease: "ease",
      }
    );
    gsap.to("#green", {
      // zIndex: 10,
      duration: 0,
    });
    gsap.to("#red", {
      // zIndex: 10,
      duration: 0,
    });
    gsap.to("#amber", {
      // zIndex: 10,
      duration: 0,
    });
    gsap.to("#orange", {
      // zIndex: 10,
      duration: 0,
    });
  }, []);

  return (
    <div className=" h-screen overflow-x-hidden relative flex justify-center items-center">
      <div
        id="orange"
        className=" w-16 h-1/2  bg-orange-400 absolute -translate-x-64"
      ></div>
      <div id="amber" className=" w-16 h-1/2  bg-amber-400 absolute"></div>
      <div id="chosenBar" className=" rotate-[-18deg] w-[2500px] absolute">
        <StreamBar color={chosen.value} />
      </div>
      <div
        id="red"
        className="w-16 h-1/2  bg-rose-400 absolute translate-x-32"
      ></div>
      <div id="highlightBar" className="  rotate-[15deg] w-[2500px] absolute">
        <StreamBar color={highlight.value} />
      </div>
      <div
        id="orange"
        className="h-[100px] w-16 bg-orange-400 absolute -translate-x-64 -translate-y-[50px]"
      ></div>
      <div className="z-[] -translate-y-[159px] absolute h-16 bg-gradient-to-r from-green-400 to-rose-400 w-48"></div>
      <div className="z-[] translate-y-[159px] absolute h-16 bg-gradient-to-r from-green-400 to-rose-400 w-48"></div>
      <div className="z-[] translate-y-[159px] -translate-x-[195px] absolute h-16 bg-gradient-to-r from-orange-400 to-green-400 w-[80px]"></div>
      <div className="z-[] -translate-y-[159px] -translate-x-[195px] absolute h-16 bg-gradient-to-r from-orange-400 to-green-400 w-[80px]"></div>
      <div
        id="green"
        className="z-[10] w-16 h-1/2 bg-green-400 absolute -translate-x-32 flex justify-center"
      ></div>
    </div>
  );
}
