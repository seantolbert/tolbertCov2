import "./App.css";
import { useEffect, useContext } from "react";
import { AppState } from "./main";
import { batch } from "@preact/signals-react";
import Cursor from "./components/Cursor";
import ThemeController from "./components/ThemeController";
import Title from "./components/Title";
import TabSwitcher from "./components/TabSwitcher";

function App() {
  const { theme, xPosition, yPosition, showCursor, selected } =
    useContext(AppState);

  useEffect(() => {
    if (window.matchMedia("(prefers-colorScheme: 'light')").matches) {
      theme.value = "light";
    } else {
      theme.value = "dark";
    }
  }, []);

  useEffect(() => {
    theme.value === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme.value]);
  

  const handleMouseEnter = () => {
    showCursor.value = true;
  };

  const handleMouseLeave = () => {
    showCursor.value = false;
  };

  const handleMouseMove = (e) => {
    batch(() => {
      xPosition.value = e.pageX;
      yPosition.value = e.pageY;
    });
  };

  return (
    <div
      className="dark:bg-dark bg-light"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <Cursor /> */}
      <ThemeController />
      <Title />
      <TabSwitcher />
    </div>
  );
}

export default App;
