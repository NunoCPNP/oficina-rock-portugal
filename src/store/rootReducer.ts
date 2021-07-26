
import { combineReducers } from 'redux';

import settings from "./settings/reducer"

const rootReducer = combineReducers({ settings });

export default rootReducer;