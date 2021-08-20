import { createContext, useReducer } from "react";

import { reducer } from "./ProductContext.reducer";

export const ProductStateContext = createContext();
export const ProductDispatchContext = createContext();

const initialState = {
  currentProduct: {
    uid: null,
    size: null,
    price: null,
    quantityAvailable: null,
    quantitySelected: null,
  },
  shoppingBag: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
};
