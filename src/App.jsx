import { useEffect, useContext } from "react";
import { AppState } from "./main";
import { batch } from "@preact/signals-react";
import ThemeController from "./components/ThemeController";
import Cursor from "./components/Cursor";
import Title from "./components/Title/Title";
import TabSwitcher from "./components/TabSwitcher";
import PortfolioHome from "./components/tabs/Portfolio/PortfolioHome";
import About from "./components/tabs/About";
import Resources from "./components/tabs/Resources";
import Experience from "./components/tabs/Experience";
import Gallery from "./components/tabs/Gallery/Gallery";
import Contact from "./components/Contact";
import FourBars from "./animations/FourBar/FourBars";
import AltFourBars from './animations/FourBar/AltFourBars'

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
      <AltFourBars />
      {/* <FourBars /> */}
      <div className="m-0 md:mx-7 md:mt-7">
        <Title />
        {/* <div className="h-screen"> */}
          {/* <TabSwitcher /> */}
          {selected.value === "Portfolio" && <PortfolioHome />}
          {selected.value === "Experience" && <Experience />}
          {selected.value === "About" && <About />}
          {selected.value === "Resources" && <Resources />}
          {/* {selected.value === "Gallery" && <Gallery />} */}
        {/* </div> */}
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
