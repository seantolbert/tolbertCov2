import { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../main";
import gsap from "gsap";

export default function Title() {
  const { theme, highlight, chosen } = useContext(AppState);

  useEffect(() => {
    theme.value === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme.value]);

  useEffect(() => {
    gsap.fromTo;
  }, []);

  return (
    <main className="z-[6] text-black dark:text-white absolute w-screen flex h-screen items-center">
      <div className="flex flex-col gap-2 items-start">
        <p
          id="titleOne"
          className="font-extrabold text-9xl"
        >
          Hey! my name is
          <span> Sean</span>
          {/* <span> Sean</span> */}
        </p>

        <p id="titleThree" className="text-9xl">
          {/* Come say <span style={{ color: chosen.value }}>Hi!</span> */}
          Come say <span>Hi!</span>
        </p>
        {/* <Social /> */}
      </div>
    </main>
  );
}
