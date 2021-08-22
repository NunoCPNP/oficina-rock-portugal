export const reducer = (state, action) => {
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
