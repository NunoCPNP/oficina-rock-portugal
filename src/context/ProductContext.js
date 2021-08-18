import { createContext, useReducer } from "react";

export const ProductStateContext = createContext();
export const ProductDispatchContext = createContext();

const initialState = {
  currentProduct: {
    uid: null,
    size: null,
    price: null,
  },
  shoppingBag: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CURRENT_PRODUCT": {
      return {
        ...state,
        currentProduct: { ...action.payload },
      };
    }

    case "CHANGE_CURRENT_PRODUCT_SIZE": {
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          ...action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
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
