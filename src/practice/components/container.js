import React from "react";
import { buyCake } from "../redux/cake/action"
import {connect} from "react-redux"

const container = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.cakes}</h2>
            <button onClick={props.buyCake}>Buy</button>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        cakes: state.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(stateToProps, mapDispatchToProps) (container);