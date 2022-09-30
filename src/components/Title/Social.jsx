import { useEffect, useContext } from "react";
import { AppState } from "../../main";
import {gsap} from "gsap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  const { theme } = useContext(AppState);

  // button rising animation
  useEffect(() => {
    const shadowTheme =
      theme.value === "dark"
        ? "13px 13px 26px #2f2f2f, -13px -13px 26px #5f5f5f"
        : "13px 13px 26px #a3a3a3, -13px -13px 26px #ffffff";
    gsap.to("#Github", { duration: 1, boxShadow: shadowTheme, ease: 'bounce' });
    gsap.to("#Linkedin", { duration: 1.3, boxShadow: shadowTheme, ease: 'bounce' });
    gsap.to("#Codepen", { duration: 1.6, boxShadow: shadowTheme, ease: 'bounce' });
  }, [theme.value]);

  return (
    <div id="buttons" className="flex gap-24 mt-10 w-3/4 ">
      <a
        id="Github"
        className="bg-light dark:bg-dark text-6xl w-24 h-24 rounded-full relative flex justify-center items-center"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/seantolbert"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        id="Codepen"
        className="bg-light dark:bg-dark text-6xl w-24 h-24 rounded-full relative flex justify-center items-center"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/seantolbert"
      >
        <FontAwesomeIcon icon={faCodepen} />
      </a>
      <a
        id="Linkedin"
        className="bg-light dark:bg-dark text-6xl w-24 h-24 rounded-full relative flex justify-center items-center"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/seantolbert"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
}
