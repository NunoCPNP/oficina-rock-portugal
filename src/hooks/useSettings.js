import { useContext } from 'react'

import { SettingsStateContext, SettingsDispatchContext } from '@/context/SettingsContext'

export const useSettingsState = () => {
  const context = useContext(SettingsStateContext)

  return context
}

export const useSettingsDispatch = () => {
  const context = useContext(SettingsDispatchContext)

  return context
}

const useSettings = () => {
  return [useSettingsState(), useSettingsDispatch()]
}

export default useSettings
