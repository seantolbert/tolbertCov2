import { useEffect } from "react";
import { useContext } from "react";
import { AppState } from "../main";
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
        y: 100,
        opacity: 0,
      },
      {
        ease: "bounce",
        duration: 0.7,
        y: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#titleTwo",
      {
        y: 100,
        opacity: 0,
      },
      {
        ease: "bounce",
        duration: 1,
        y: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#titleThree",
      {
        y: 100,
        opacity: 0,
      },
      {
        ease: "bounce",
        duration: 1.3,
        y: 0,
        opacity: 1,
      }
    );
  }, []);

  return (
    <main className="text-dark dark:text-light h-screen">
      <div className="flex flex-col gap-6 items-start">
        <p
          id="titleOne"
          className={`text-9xl font-bold dark:text-light text-dark`}
        >
          Hey! my name is
          <span style={{ color: chosen.value }}> Sean</span>
        </p>
        <p
          id="titleTwo"
          style={{ color: highlight.value }}
          className="text-4xl "
        >
          I make <span style={{ color: highlight.value }}>shopify</span> themes
          and web apps
        </p>
        <p id="titleThree" className="text-9xl">
          Come say <span style={{ color: chosen.value }}>Hi!</span>
        </p>
        <Social />
      </div>
    </main>
  );
}
