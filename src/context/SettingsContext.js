import { createContext, useReducer } from "react";

export const SettingsStateContext = createContext();
export const SettingsDispatchContext = createContext();

const initialState = {
  cartDropdown: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART": {
      return {
        ...state,
        cartDropDown: !state.cartDropDown,
      };
    }

    default: {
      return state;
    }
  }
};

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SettingsStateContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsStateContext.Provider>
  );
};
