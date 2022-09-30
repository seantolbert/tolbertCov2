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
      <div className=" h-screen overflow-x-hidden relative flex justify-center">
        <div
          id="orange"
          className=" h-full w-fit bg-orange-400 absolute -translate-x-64"
        >
          123456
        </div>
        <div id="amber" className=" h-full w-fit bg-amber-400 absolute">
          123456
        </div>
        <div id="chosenBar" className=" rotate-[-18deg] w-[2000px] absolute">
          <StreamBar color={chosen.value} />
        </div>
        <div
          id="red"
          className="h-full w-fit bg-rose-400 absolute translate-x-32"
        >
          123456
        </div>
        <div id="highlightBar" className=" rotate-[15deg] w-[2000px] absolute">
          <StreamBar color={highlight.value} />
        </div>
        <div
          id="orange"
          className=" h-[440px] w-fit bg-orange-400 absolute -translate-x-64"
        >
          123456
        </div>
        <div
          id="green"
          className="h-full w-fit bg-green-400 absolute -translate-x-32"
        >
          123456
        </div>
      </div>
  );
}
