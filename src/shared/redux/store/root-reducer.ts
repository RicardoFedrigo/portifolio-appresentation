import { combineReducers } from "redux"
import { languageReducer } from "../language/reducer"

const rootReducer = combineReducers({ languageReducer })

export default rootReducer
