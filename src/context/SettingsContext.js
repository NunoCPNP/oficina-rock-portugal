import { createContext, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [cartDropDown, setCartDropDown] = useState(false);

  const toggleCartDropDown = () => {
    setCartDropDown(!cartDropDown);
  };

  return (
    <SettingsContext.Provider
      value={{
        cartDropDown,
        toggleCartDropDown,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
