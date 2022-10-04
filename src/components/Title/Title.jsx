import { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../../main";
import Social from "./Social";
import gsap from "gsap";

export default function Title() {
  const { theme, highlight, chosen } = useContext(AppState);

  useEffect(() => {
    theme.value === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme.value]);

  useEffect(() => {
    gsap.fromTo(
      "#titleOne",
      {
        x: '100%',
        opacity: 0,
        // backdropFilter: "blur(0)",
        // background: "transparent",
      },
      {
        ease: "power3",
        duration: 3,
        x: 0,
        opacity: 1,
        // background: "rgba(0, 0, 0, 0.3)",
        // backdropFilter: "blur(10px)",
      }
    );
    gsap.fromTo(
      "#titleTwo",
      {
        x: '-100%',
        opacity: 0,
        // backdropFilter: "blur(0)",
        // background: "transparent",
      },
      {
        ease: "power3",
        duration: 1.5,
        delay: 3,
        x: 0,
        opacity: 1,
        // background: "rgba(0, 0, 0, 0.3)",
        // backdropFilter: "blur(10px)",
      }
    );
    gsap.fromTo(
      "#titleThree",
      {
        x: '100%',
        opacity: 0,
        // backdropFilter: "blur(0)",
        // background: "transparent",
      },
      {
        ease: "power3",
        duration: 3,
        x: 0,
        opacity: 1,
        // background: "rgba(0, 0, 0, 0.3)",
        // backdropFilter: "blur(10px)",
      }
    );
  }, []);

  return (
    <main className="z-[6] text-black dark:text-white absolute w-screen flex h-screen items-center">
      <div className="flex flex-col gap-2 items-start">
        <p id="titleOne" className="text-9xl w-screen font-bold  p-3">
          Hey! my name is
          {/* <span style={{ color: chosen.value }}> Sean</span> */}
          <span> Sean</span>
        </p>
        {/* <p
          id="titleTwo"
          style={{ color: highlight.value }}
          className="text-4xl "
        >
          I make
          <span style={{ color: highlight.value }}>shopify</span> 
          <span>shopify</span>
          themes and web apps
        </p> */}
        <p id="titleThree" className="text-9xl">
          {/* Come say <span style={{ color: chosen.value }}>Hi!</span> */}
          Come say <span>Hi!</span>
        </p>
        {/* <Social /> */}
      </div>
    </main>
  );
}
