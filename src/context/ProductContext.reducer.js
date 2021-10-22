export const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CURRENT_PRODUCT': {
      return {
        ...state,
        currentProduct: { ...action.payload },
      }
    }

    case 'CHANGE_CURRENT_PRODUCT_SIZE': {
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          ...action.payload,
        },
      }
    }

    case 'CHANGE_CURRENT_PRODUCT_QUANTITY': {
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          quantitySelected: action.payload,
        },
      }
    }

    case 'RESET_CURRENT_PRODUCT': {
      return {
        ...state,
        currentProduct: {
          uid: null,
          type: null,
          band: null,
          title: null,
          image: null,
          size: null,
          price: null,
          quantityAvailable: null,
          quantitySelected: null,
        },
      }
    }

    case 'ADD_PRODUCT_TO_BAG': {
      return {
        ...state,
        shoppingBag: [...state.shoppingBag, action.payload],
      }
    }

    case 'DELETE_PRODUCT_FROM_BAG': {
      const bag = [...state.shoppingBag]

      bag.splice(action.payload, 1)

      return {
        ...state,
        shoppingBag: [...bag],
      }
    }

    case 'RESTORE_FROM_STORAGE': {
      return {
        ...state,
        shoppingBag: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
