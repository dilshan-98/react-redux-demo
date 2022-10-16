import { BUY_FANTA } from "./fantaTypes";

const initState = {
    noOfFanta: 50
}

export const fantaReducer = (state = initState, action) => {
    switch (action.type) {
        case BUY_FANTA: return {
            ...state,
            noOfFanta: state.noOfFanta - 10
        }

        default: return state
    }
}
