import React, { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../../main";
import gsap from "gsap";
import BlueStripe from "../../assets/BluePaint.png";
import RedStripe from "../../assets/RedPaint.png";
import YellowStripe from "../../assets/YellowPaint.png";
import Bar from "../../assets/NegBar.png";
import HalfBar from "../../assets/NegBarHalf.png";

export default function AltFourBars() {
  const { theme } = useContext(AppState);

  useEffect(() => {
    gsap.fromTo(
      "#Bar1",
      {
        y: 6,
        ease: "none",
      },
      {
        duration: 1.5,
        y: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      "#HalfBar",
      {
        y: 6,
        ease: "none",
      },
      {
        duration: 1.5,
        y: 0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      "#Bar2",
      {
        y: 6,
        ease: "none",
      },
      {
        duration: 1.5,
        y: 0,
        delay: 0.12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      "#Bar3",
      {
        y: -6,
        ease: "none",
      },
      {
        duration: 1.5,
        delay: 0.1,
        y: 0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      "#Bar4",
      {
        y: 10,
        ease: "none",
      },
      {
        duration: 1.5,
        yoyo: true,
        delay: 0.08,
        y: 0,
        repeat: -1,
        ease: "none",
      }
    );
    gsap.fromTo(
      "#YellowStripe",
      {
        y: "-100%",
      },
      {
        ease: "bounce",
        duration: 3,
        yoyo: true,
        delay: 0.1,
        y: 0,
      }
    );
    gsap.fromTo(
      "#RedStripe",
      {
        y: "100%",
      },
      {
        ease: "bounce",
        duration: 3,
        delay: 0.15,
        yoyo: true,
        y: 0,
      }
    );
    gsap.fromTo(
      "#BlueStripe",
      {
        y: "100%",
      },
      {
        ease: "bounce",
        duration: 3,
        yoyo: true,
        y: 0,
      }
    );
  }, []);

  return (
    <div className="flex justify-center relative">
      {/*  */}
      {/* Bar1 + Bar3 */}
      {/*  */}
      <div
        id="Bar1"
        className="bar h-screen flex items-center absolute  -translate-x-48"
      >
        <img
          src={Bar}
          className={`h-5/6 w-full ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
      <div
        id="Bar3"
        className="bar h-screen absolute flex items-center translate-x-16"
      >
        <img
          src={Bar}
          className={`h-5/6 w-full ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
      {/*  */}
      {/* BlueStripe + RedStripe */}
      {/*  */}
      <div id="BlueStripe" className="w-screen h-screen absolute">
        <img src={BlueStripe} className="w-full h-full" alt="BlueStripe" />
      </div>
      <div id="RedStripe" className="h-screen w-screen absolute">
        <img src={RedStripe} className="w-full h-full" alt="RedStripe" />
      </div>
      {/*  */}
      {/* Bar4 */}
      {/*  */}
      <div
        id="Bar4"
        className="bar h-screen flex items-center absolute translate-x-48"
      >
        <img
          src={Bar}
          className={`h-5/6 w-full ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
      {/*  */}
      {/* Yellow Stripe */}
      {/*  */}
      <div id="YellowStripe" className="h-screen w-screen absolute">
        <img src={YellowStripe} className="w-full h-full" alt="YellowStripe" />
      </div>
      {/* Bar 1.5 + Bar2 */}
      <div
        id="HalfBar"
        className="bar h-screen flex items-center absolute  -translate-x-48"
      >
        <img
          src={HalfBar}
          className={`h-5/6 w-full ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
      <div
        id="Bar2"
        className="z-[5] bar h-screen flex items-center absolute -translate-x-16"
      >
        <img
          src={Bar}
          className={`h-5/6 w-full ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
    </div>
  );
}
