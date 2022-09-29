import { gsap } from "gsap";
import { useContext } from "react";
import { AppState } from "../main";

export default function Cursor() {
  const { xPosition, yPosition, showCursor } = useContext(AppState);

  const innerY = yPosition.value - 9;
  const innerX = xPosition.value - 5;

  const outerY = yPosition.value - 27;
  const outerX = xPosition.value - 23;

  gsap.to("#inner", {
    duration: 0,
    x: innerX + "px",
    y: innerY + "px",
  });

  gsap.to("#outer", {
    duration: 0.5,
    x: outerX + "px",
    y: outerY + "px",
  });

  return (
    <div>
      <div
        id="inner"
        className={`w-3 h-3 rounded-full dark:bg-light bg-dark absolute transition-opacity duration-300 ${
          showCursor.value ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        id="outer"
        className={`w-12 h-12 rounded-full border-4 dark:border-light border-dark transition-opacity duration-300 ${
          showCursor.value ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}
