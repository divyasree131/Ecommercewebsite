import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'


const CheckOut = () => {
    const state =useSelector((state)=>state.CartReducer)
 
    return (
        <div>

            {state.length>0?<h2 className="text-center">Order placed successfully</h2>:''}
        </div>
    )
}

export default CheckOut
