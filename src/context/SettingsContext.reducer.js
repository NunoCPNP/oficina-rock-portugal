export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TOPBANNER': {
      return { ...state, topBanner: !state.topBanner }
    }

    case 'TOGGLE_CART': {
      return {
        ...state,
        cartOpen: !state.cartOpen,
      }
    }

    case 'TOGGLE_GDPR': {
      return {
        ...state,
        gdprOpen: !state.gdprOpen,
      }
    }

    case 'TOGGLE_LOADING': {
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    }

    default: {
      return state
    }
  }
}
