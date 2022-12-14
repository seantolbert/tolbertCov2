import React, { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../main";
import gsap from "gsap";
import BlueStripe from "../assets/BluePaint.png";
import RedStripe from "../assets/RedPaint.png";
import YellowStripe from "../assets/YellowPaint.png";
import Bar from "../assets/NegBar.png";
import HalfBar from "../assets/NegBarHalf.png";

export default function AltFourBars() {
  const { theme, xPosition, yPosition } = useContext(AppState);

  useEffect(() => {
    let paintTl = gsap.timeline({ defaults: { ease: "power4" } });

    // gsap.to("#Bar1, #HalfBar", {
    //   duration: 1,
    //   ease: "bounce",
    //   x: "-200px",
    //   y: "-40px",
    // });
    // gsap.to("#Bar2", {
    //   duration: 1,
    //   ease: "bounce",
    //   x: "-65px",
    //   y: "40px",
    // });
    // gsap.to("#Bar3", {
    //   duration: 1,
    //   ease: "bounce",
    //   x: "65px",
    //   y: "-40px",
    // });
    // gsap.to("#Bar4", {
    //   duration: 1,
    //   ease: "bounce",
    //   x: "200px",
    //   y: "40px",
    // });

    paintTl
      .fromTo(
        "#YellowStripe",
        {
          y: "-100%",
        },
        {
          duration: 3,
          yoyo: true,
          delay: 0.1,
          y: 0,
        }
      )
      .fromTo(
        "#BlueStripe",
        {
          y: "100%",
        },
        {
          duration: 3,
          yoyo: true,
          y: 0,
        },
        "-=2.5"
      )
      .fromTo(
        "#RedStripe",
        {
          y: "100%",
        },
        {
          duration: 3,
          yoyo: true,
          y: 0,
        },
        "-=2.4"
      );

    gsap.to(".stripe", {
      duration: 3,
      y: -10,
      repeat: -1,
      yoyo: true,
      delay: 3,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, []);

  const handleMouseMove = (e) => {
    let x = e.pageX - window.innerWidth / 2;
    let y = e.pageY - window.innerHeight / 2;
    gsap.to("#Bar2, #Bar3, #Bar4", {
      duration: 1,
      ease: "elastic.out",
      x: x / 15,
      y: y / 15,
      stagger: 0.1
    });
    gsap.to("#Bar1, #HalfBar", {
      duration: 1,
      ease: "elastic.out",
      x: x / 15,
      y: y / 15,
    });
  };

  return (
    <div
      className="flex justify-center h-screen w-screen relative"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      {/*  */}
      {/* Bar1 + Bar3 */}
      {/*  */}
      <div
        id="Bar1"
        className="bar h-screen flex items-center bottom-[4%] left-[35%] absolute"
      >
        <img
          src={Bar}
          className={`h-3/5 select-none w-full ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
      <div
        id="Bar3"
        className="bar h-screen absolute flex bottom-[4%] left-[55%] items-center"
      >
        <img
          src={Bar}
          className={`h-3/5 select-none w-full ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
      {/*  */}
      {/* BlueStripe + RedStripe */}
      {/*  */}
      <div id="BlueStripe" className="stripe w-screen h-screen absolute">
        <img
          src={BlueStripe}
          className={`w-full h-full select-none ${theme.value === "light" && "invert"}`}
          alt="BlueStripe"
        />
      </div>
      <div id="RedStripe" className="stripe h-screen w-screen absolute">
        <img
          src={RedStripe}
          className={`w-full h-full select-none ${theme.value === "light" && "invert"}`}
          alt="RedStripe"
        />
      </div>
      {/*  */}
      {/* Bar4 */}
      {/*  */}
      <div
        id="Bar4"
        className="bar h-screen flex items-center top-[4%] left-[65%] absolute"
      >
        <img
          src={Bar}
          className={`h-3/5 w-full select-none ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
      {/*  */}
      {/* Yellow Stripe */}
      {/*  */}
      <div id="YellowStripe" className="stripe h-screen w-screen absolute">
        <img
          src={YellowStripe}
          className={`w-full h-full select-none ${theme.value === "light" && "invert"}`}
          alt="YellowStripe"
        />
      </div>
      {/* Bar 1.5 + Bar2 */}
      <div
        id="HalfBar"
        className="bar h-screen flex items-center bottom-[4%] left-[35%] absolute "
      >
        <img
          src={HalfBar}
          className={`h-3/5 w-full select-none ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
      <div
        id="Bar2"
        className="z-[5] bar h-screen flex items-center top-[4%] left-[45%] absolute"
      >
        <img
          src={Bar}
          className={`h-3/5 w-full select-none ${theme.value === "light" && "invert"}`}
          alt="bar"
        />
      </div>
    </div>
  );
}
