import { signal } from "@preact/signals-react";

function AdminControl() {
  const theme = signal(null);
  const highlight = signal("#eaae39");
  const chosen = signal("#b43a3a");
  const xPosition = signal(null);
  const yPosition = signal(null);
  const showCursor = signal(false);
  const selected = signal("Portfolio");

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