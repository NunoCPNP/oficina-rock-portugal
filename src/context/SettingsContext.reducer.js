export const reducer = (state, action) => {
  switch (action.type) {
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

    case 'ENABLE_TOAST': {
      return {
        ...state,
        toast: {
          show: true,
          type: action.payload.type,
          message: action.payload.message,
        },
      }
    }

    case 'DISABLE_TOAST': {
      return {
        ...state,
        toast: {
          show: false,
          type: null,
          message: null,
        },
      }
    }

    default: {
      return state
    }
  }
}
