import React, { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../../main";
import gsap from "gsap";
import StreamBar from "./StreamBar";
import BlueStripe from "../../assets/BluePaint.png";
import RedStripe from "../../assets/RedPaint.png";
import YellowStripe from "../../assets/YellowPaint.png";

export default function AltFourBars() {
  const { chosen, highlight } = useContext(AppState);

  useEffect(() => {}, []);

  return (
    <div className="relative flex justify-center">
      {/*  */}
      {/* Bar1 + Bar3 */}
      {/*  */}
      <div
        id="Bar1"
        className="bar h-screen w-16 bg-black absolute -translate-x-64"
      ></div>
      <div id="bar3" className="bar h-screen w-16 bg-black absolute"></div>
      {/*  */}
      {/* BlueStripe + RedStripe */}
      {/*  */}
      <div id="blueStripe" className="w-screen h-screen absolute">
        <img src={BlueStripe} className="w-full h-full" alt="BlueStripe" />
      </div>
      <div id="redStripe" className="h-screen w-screen absolute">
        <img src={RedStripe} className="w-full h-full" alt="RedStripe" />
      </div>
      {/*  */}
      {/* Bar4 */}
      {/*  */}
      <div
        id="Bar4"
        className="h-screen w-16 bg-black absolute translate-x-32"
      ></div>
      {/*  */}
      {/* Yellow Stripe */}
      {/*  */}
      <div id="yellowStripe" className="h-screen w-screen absolute">
        <img src={YellowStripe} className="w-full h-full" alt="YellowStripe" />
      </div>
      {/* Bar 1.5 + Bar2 */}
      <div
        id="Bar1.5"
        className=" h-[420px] w-16 bg-black absolute -translate-x-64"
      ></div>
      <div
        id="Bar2"
        className="z-[5] h-screen w-16 bg-black absolute -translate-x-32"
      ></div>
    </div>
  );
}
