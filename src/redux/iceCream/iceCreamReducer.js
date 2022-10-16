import { BUY_ICECREAM } from "./iceCreamTypes";

const initState = {
    noOfIceCreams: 20
}

const iceCreamReducer = (state = initState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams - 5
        }

        default: return state
    }
}

export default iceCreamReducer;