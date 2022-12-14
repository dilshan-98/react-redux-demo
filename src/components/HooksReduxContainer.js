import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

export const HooksReduxContainer = () => {
    const cakes = useSelector(state => state.cake.noOfCakes);
    const cakeActionOrRatherCanSayAsDispatch = useDispatch();
    return (
        <div>
            <h1>No of Cakes {cakes}</h1>
            <button onClick={() => cakeActionOrRatherCanSayAsDispatch(buyCake())}>Buy</button>
        </div>
    )
}