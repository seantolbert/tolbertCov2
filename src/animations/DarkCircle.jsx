import { useContext, useEffect } from "react";
import { gsap } from "gsap";
import { AppState } from "../main";
import Values from "values.js";

export default function DarkCircle() {
  const { chosen, xPosition, yPosition } = useContext(AppState);

  const lightValues = new Values(chosen.value).tints(20);
  const darkValues = new Values(chosen.value).shades(20);

  console.log(window.innerWidth / 2)

  useEffect(() => {
    const appearTl = gsap.timeline({
      defaults: { duration: 0.2, ease: "power1" },
    });
    const bwidthTl = gsap.timeline({
      defaults: { duration: 0.15, ease: "power1" },
    });

    appearTl
      .to("#layer1", { opacity: 1, width: "10%", height: "10%" })
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

  const handleMouseMove = (e) => {
    let x;
    let y;
    x = e.pageX - window.innerWidth / 2;
    y = e.pageY - window.innerHeight / 2;
    const cursorTl = gsap.timeline({
      defaults: {
        ease: "elastic",
        x: x,
        y: y,
        duration: 0.2,
      },
    });
    cursorTl
      .to("#layer1", {})
      .to("#layer2", {})
      .to("#layer3", {})
      .to("#layer4", {})
      .to("#layer5", {})
      .to("#layer6", {})
      .to("#layer7", {})
      .to("#layer8", {});
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
