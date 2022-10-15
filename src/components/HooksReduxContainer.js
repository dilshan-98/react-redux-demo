import React from "react"
import { useSelector } from "react-redux";

export const HooksReduxContainer = (props) => {
    const cakes = useSelector(state => state.noOfCakes);
    return (
        <div>
            <h1>No of Cakes {cakes}</h1>
            <button>Buy</button>
        </div>
    )
}