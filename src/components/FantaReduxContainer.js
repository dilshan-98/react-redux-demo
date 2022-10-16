import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { buyFanta } from "../redux";

// const FantaReduxContainer = (props) => {
//     return (
//         <div>
//             <h2>Number of Fanta Bottles: {props.noOfFanta}</h2>
//             <button onClick={props.buyFanta}>Buy</button>
//         </div>
//     )
// }

const FantaReduxContainer = () => {
    //using Hooks
    const fantaTotal = useSelector(state => state.fanta.noOfFanta);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Fanta Bottles: {fantaTotal}</h2>
            <button onClick={() => dispatch(buyFanta())}>Buy</button>
        </div>
    )
}

// const stateToProps = (state) => {
//     return {
//         noOfFanta: state.fanta.noOfFanta
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyFanta: () => dispatch(buyFanta())
//     }
// }

// export default connect(stateToProps, mapDispatchToProps)(FantaReduxContainer);

export default FantaReduxContainer;