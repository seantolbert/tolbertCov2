import { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../main";
import gsap from "gsap";
import FourBars from "../animations/FourBar/FourBars";
import DarkCircle from "../animations/DarkCircle";

export default function Title() {
  const { theme, highlight, chosen } = useContext(AppState);

  useEffect(() => {
    theme.value === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme.value]);

  // useEffect(() => {
  //   gsap.fromTo;
  // }, []);

  return (
    <>
      <DarkCircle />
      <main className="h-screen text-black  w-screen">
        <div className="flex flex-col gap-2 items-start justify-center h-full">
          {/* <p id="titleOne" style={{color: highlight.value}} className="font-extrabold text-9xl z-[2]">
            Hey! my name is Sean
          </p>
          <p id="titleThree" className="text-9xl z-[2]">
            Come say Hi
          </p> */}
        </div>
      </main>
    </>
  );
}
