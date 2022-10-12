import { useContext, useEffect } from "react";
import { gsap } from "gsap";
import { AppState } from "../main";
import Values from "values.js";

export default function DarkCircle() {
  const { chosen, xPosition, yPosition, showCursor } = useContext(AppState);

  const lightValues = new Values(chosen.value).tints(20);
  const darkValues = new Values(chosen.value).shades(20);

  console.log(window.innerWidth / 2);

  useEffect(() => {
    const appearTl = gsap.timeline({
      defaults: { duration: 0.2, ease: "power1" },
    });
    const bwidthTl = gsap.timeline({
      defaults: { duration: 0.15, ease: "power1" },
    });

    appearTl
      .to("#layer1", { opacity: 1, width: "50px", height: "50px" })
      .to("#layer2", { opacity: 1, width: "20%", height: "20%" })
      .to("#layer3", { opacity: 1, width: "30%", height: "30%" })
      .to("#layer4", { opacity: 1, width: "40%", height: "40%" })
      .to("#layer5", { opacity: 1, width: "50%", height: "50%" })
      .to("#layer6", { opacity: 1, width: "60%", height: "60%" })
      .to("#layer7", { opacity: 1, width: "70%", height: "70%" })
      .to("#layer8", { opacity: 1, width: "80%", height: "80%" })
      .to("#layer9", { opacity: 1, width: "90%", height: "90%" });

    bwidthTl
      .to("#layer1", { background: `#${darkValues[4].hex}`, delay: 0.8 })
      .to("#layer2", { background: `#${lightValues[3].hex}` })
      .to("#layer3", { background: `#${darkValues[3].hex}` })
      .to("#layer4", { background: `#${lightValues[2].hex}` })
      .to("#layer5", { background: `#${darkValues[2].hex}` })
      .to("#layer6", { background: `#${lightValues[1].hex}` })
      .to("#layer7", { background: `#${darkValues[1].hex}` })
      .to("#layer8", { background: `#${lightValues[0].hex}` })
      .to("#layer9", { background: `#${darkValues[0].hex}` });
  }, [chosen.value]);

  // const handleMouseEnter = () => {
  //   showCursor.value = true;
  // };

  // const handleMouseLeave = () => {
  //   showCursor.value = false;
  //   const resetTl = gsap.timeline({
  //     defaults: { ease: "elastic", x: 0, y: 0 },
  //     duration: 0.2,
  //   });
  //   resetTl
  //     .to("#layer8", {})
  //     .to("#layer7", {})
  //     .to("#layer6", {})
  //     .to("#layer5", {})
  //     .to("#layer4", {})
  //     .to("#layer3", {})
  //     .to("#layer2", {})
  //     .to("#layer1", {});
  // };

  console.log(showCursor.value);

  const handleMouseMove = (e) => {
      let x = e.pageX - window.innerWidth / 2;
      let y = e.pageY - window.innerHeight / 2;
    const cursorTl = gsap.timeline({
      defaults: {
        ease: "power2",
        x: x / 3,
        y: y / 3,
      },
    });
    cursorTl
      .to("#layer1", { duration: 0.2 })
      .to("#layer2", { duration: 0.25 })
      .to("#layer3", { duration: 0.3 })
      .to("#layer4", { duration: 0.35 })
      .to("#layer5", { duration: 0.4 })
      .to("#layer6", { duration: 0.45 })
      .to("#layer7", { duration: 0.5 })
      .to("#layer8", { duration: 0.55 });
  };

  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      className="flex h-screen w-screen absolute justify-center items-center"
    >
      <div
        id="layer9"
        style={{ borderColor: chosen.value }}
        className="border-2 w-[175px] h-[175px] rounded-full flex items-center justify-center opacity-0 absolute"
      ></div>
      <div
        id="layer8"
        style={{ borderColor: chosen.value }}
        className=" border-2 w-[150px] h-[150px] rounded-full flex items-center justify-center opacity-0 absolute"
      ></div>
      <div
        id="layer7"
        style={{ borderColor: chosen.value }}
        className=" w-[125px] h-[125px] rounded-full border-2 flex items-center justify-center opacity-0 absolute"
      ></div>
      <div
        id="layer6"
        style={{ borderColor: chosen.value }}
        className=" w-[100px] h-[100px] rounded-full border-2 flex items-center justify-center opacity-0 absolute"
      ></div>
      <div
        id="layer5"
        style={{ borderColor: chosen.value }}
        className=" w-[75px] h-[75px] rounded-full border-2 flex items-center justify-center opacity-0 absolute"
      ></div>
      <div
        id="layer4"
        style={{ borderColor: chosen.value }}
        className=" w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center opacity-0 absolute"
      ></div>
      <div
        id="layer3"
        style={{ borderColor: chosen.value }}
        className=" w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center opacity-0 absolute"
      ></div>
      <div
        id="layer2"
        style={{ borderColor: chosen.value }}
        className=" w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center opacity-0 absolute"
      ></div>
      <div
        id="layer1"
        style={{ borderColor: chosen.value }}
        className="w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center opacity-0 absolute"
      ></div>
    </div>
  );
}
