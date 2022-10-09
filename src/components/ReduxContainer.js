import React from "react";
import { connect } from "react-redux";
import App2 from "../practice/App2";
import buyCake from "../redux/cake/cakeActions";

const ReduxContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes - {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <App2/>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        noOfCakes: state.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(stateToProps, mapDispatchToProps)(ReduxContainer);