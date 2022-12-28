import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemsContainer(props) {
    return (
        <div>
            <h2>Items - {props.items}</h2>
            <button onClick={() => props.itemFunction()}>Buy</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const items = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCreams

    return {
        items: items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    
    return {
        itemFunction: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);