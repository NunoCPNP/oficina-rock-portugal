import { createContext, useReducer } from 'react'

import { reducer } from './SettingsContext.reducer'

export const SettingsStateContext = createContext()
export const SettingsDispatchContext = createContext()

const initialState = {
  cartOpen: false,
  gdprOpen: true,
  isLoading: false,
  toast: {
    show: false,
    type: null,
    message: null,
  },
}

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <SettingsStateContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>{children}</SettingsDispatchContext.Provider>
    </SettingsStateContext.Provider>
  )
}
