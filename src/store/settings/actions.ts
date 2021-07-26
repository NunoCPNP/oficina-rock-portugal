export const TOGGLE_BAG = "TOGGLE_BAG";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const TOGGLE_DARKMODE = "TOGGLE_DARKMODE";

export function toggleBag() {
  return {
    type: "TOGGLE_BAG",
  };
}

export function toggleMenu() {
  return {
    type: "TOGGLE_MENU",
  };
}

export function toggleDarkMode() {
  return {
    type: "TOGGLE_DARKMODE",
  };
}
