import { signal } from "@preact/signals-react";
import Values from "values.js";

function AdminControl() {
  const theme = signal('dark');
  const chosen = signal("#11cbd1");
  const highlight = signal("#f54842");
  const xPosition = signal(null);
  const yPosition = signal(null);
  const showCursor = signal(false);
  const selected = signal("About");

  const handleThemeSwitch = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  return {
    theme,
    highlight,
    chosen,
    xPosition,
    yPosition,
    showCursor,
    
    selected,
    
    handleThemeSwitch,
  };
}

export default AdminControl();
