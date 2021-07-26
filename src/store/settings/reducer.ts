import { TOGGLE_BAG, TOGGLE_DARKMODE, TOGGLE_MENU } from "./actions";

import initialState from "./initialState";

type Action = {
  type: string;
};

export default function reducer(state = initialState, action: Action) {
  const { type } = action;

  switch (type) {
    case TOGGLE_BAG:
      return {
        ...state,
        bagVisibility: !state.bagVisibility,
      };

    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkmode: !state.darkMode,
      };

    case TOGGLE_BAG:
      return {
        ...state,
        menuVisbility: !state.menuVisibility,
      };

    default:
      return state;
  }
}
