import { BUY_CAKE } from "./types"

const initState = {
    noOfCakes: 100
}

const reducer = (state=initState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - 2
        }

        default: return state
    }
}

export default reducer;