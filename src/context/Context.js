import { signal } from "@preact/signals-react";

function AdminControl() {
  const theme = signal(null);
  const chosen = signal("#11cbd1");
  const highlight = signal("#d1c111");
  const xPosition = signal(null);
  const yPosition = signal(null);
  const showCursor = signal(false);
  const selected = signal("Gallery");

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
