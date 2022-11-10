// TODO: create a component that displays a single bakery item
import { useState } from "react";

// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    const item = props.item; 
    return(
        <div style={{width:"400px"}}>
            <h1>{item.name}</h1>
            <img src = {item.image} width= "400px"></img>
            <p>{item.description}</p>
            <h2>{item.price}</h2>
                <button onClick={() => props.addToCart(props.index)}>Add to Cart</button>
        </div>
    )
}
