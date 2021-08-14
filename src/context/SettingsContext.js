import { createContext, useReducer } from "react";

export const SettingsStateContext = createContext();
export const SettingsDispatchContext = createContext();

const initialState = {
  cartOpen: false,
  gdprOpen: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART": {
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    }

    case "TOGGLE_GDPR": {
      return {
        ...state,
        gdprOpen: !state.gdprOpen,
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
