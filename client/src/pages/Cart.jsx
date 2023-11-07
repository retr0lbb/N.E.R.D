import React, {useState, useRef, useEffect}from "react";
import {loadStripe} from "@stripe/stripe-js"
export default function(){
    const PUBLIC_KEY = "pk_test_51NNHwlByYleOMp8rNfs9thhr0zUQ5SojfaH78Ralmo9qrLBYpPOFfWH8ifWhJGzSMDjHN4gd77FtXa7K7OtZR5WG00rQIvWSnT"
    const [cartItens, setCartItens] = useState([])

    useEffect(()=>{
        const stripePromisse = loadStripe
    })

    return(
    <>
    </>
    )
}