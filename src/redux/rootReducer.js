import { combineReducers } from "redux";
import reducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { fantaReducer } from "./fanta/fantaReducer";

const rootReducer = combineReducers({
    cake: reducer,
    iceCream: iceCreamReducer,
    fanta: fantaReducer
})

export default rootReducer;