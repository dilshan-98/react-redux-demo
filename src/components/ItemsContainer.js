import React from "react";
import { connect } from "react-redux";

function ItemsContainer(props) {
    return (
        <div>
            <h2>Items - {props.items}</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const items = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCreams

    return {
        items: items
    }
}

export default connect(mapStateToProps)(ItemsContainer);