import { useContext } from "react";
import { AppState } from "../main";
import { useSignal } from "@preact/signals-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faXmark,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

export default function ThemeController() {
  const { theme, chosen, highlight, handleThemeSwitch } = useContext(AppState);

  const show = useSignal(false);

  return (
    <div className="fixed right-0 sm:bottom-0 md:top-0 flex sm:flex-col-reverse md:flex-col items-center gap-5 p-2 rounded-xl h-fit group z-[7]">
      {show.value ? (
        <>
          {/* menu */}

          <button
            onClick={() => {
              show.value = !show.value;
            }}
            className="w-16 h-16 bg-light dark:bg-dark dark:text-light text-dark dark:shadow-pressedSmallDark shadow-pressedSmallLight rounded-full text-3xl"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <button
            onClick={handleThemeSwitch}
            className="bg-light dark:bg-dark shadow-smallLight dark:shadow-smallDark w-16 h-16 dark:text-light text-dark rounded-md text-3xl font-bold flex justify-center items-center"
          >
            {theme.value === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
          <form className="bg-light dark:bg-dark flex flex-col items-center justify-center gap-1 text-sm font-bold dark:text-light text-dark dark:shadow-smallDark shadow-smallLight rounded-lg p-1">
            <label htmlFor="highlight">two</label>
            <input
              id="mainInput"
              type="color"
              name="highlight"
              className="h-14 w-14 bg-transparent rounded-lg border-none cursor-pointer appearance-none"
              onChange={(e) => (highlight.value = e.target.value)}
              value={highlight.value}
            />
          </form>
          <form className="bg-light dark:bg-dark flex flex-col items-center justify-center gap-1 text-sm font-bold dark:text-light text-dark dark:shadow-smallDark shadow-smallLight rounded-lg p-1">
            <label htmlFor="main">one</label>
            <div>
              <input
                id="secondaryInput"
                type="color"
                name="main"
                className="h-14 w-14 bg-transparent rounded-lg border-none cursor-pointer appearance-none"
                onChange={(e) => (chosen.value = e.target.value)}
                value={chosen.value}
              />
            </div>
          </form>
        </>
      ) : (
        <button
          onClick={() => (show.value = !show.value)}
          className={`w-16 h-16 bg-light dark:bg-dark dark:text-light text-dark text-3xl transition-shadow duration-600 hover:dark:shadow-smallDark hover:shadow-smallLight rounded-full `}
        >
          <FontAwesomeIcon icon={faBrush} />
        </button>
      )}
    </div>
  );
}
