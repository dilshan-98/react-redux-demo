import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const IceCreamReduxContainer = (props) => {
    return (
        <div>
            <h3>Number of Ice Creams: {props.noOfIceCreams}</h3>
            <button onClick={props.buyIceCream}>Buy</button>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        noOfIceCreams: state.iceCream.noOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(stateToProps, mapDispatchToProps)(IceCreamReduxContainer);