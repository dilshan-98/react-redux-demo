import React, {useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewReduxContainer = (props) => {
    const [number, setNumber] = useState(1); 
    return (
        <div>
            <h2>Number of Cakes - {props.noOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(stateToProps, mapDispatchToProps)(NewReduxContainer);