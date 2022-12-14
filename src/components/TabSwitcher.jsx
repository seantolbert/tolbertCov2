import { useContext } from "react";
import { AppState } from "../main";

export default function TabSwitcher() {
  const { selected } = useContext(AppState);

  const pages = ["Portfolio", "Experience", "Resources", "About", "Gallery"];

  return (
    <div id="tabSwitcher" className="mt-10 w-full text-2xl flex justify-evenly">
      {pages.map((page) => (
        <button
          onClick={() => {
            selected.value = page;
          }}
          key={page}
          className={`dark:text-light text-dark font-bold border-dark dark:border-light ${
            selected.value === page && "border-b-4 "
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
