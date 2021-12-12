import React from 'react'
import { useSelector } from 'react-redux'

import { useDispatch} from 'react-redux'
import {AddCart,DelCart} from '../Redux/Action/index'
import {Link} from 'react-router-dom'
const Cart = () => {
    const state =useSelector((state)=>state.CartReducer)
    
   console.log(state)
   const dispatch = useDispatch();

   const addproduct=(Productdetail)=>{
    dispatch(AddCart(Productdetail))
}
const delproduct=(Productdetail)=>{
dispatch(DelCart(Productdetail));
}
   


const ShowCart=()=>{
    return (
        <>
{state.map((product)=>{
    return (
        <>
        <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
                <button className="btn-close float-end" aria-label="Close"></button>
        <div className="row" key={product.id}>
        <div className="col-md-4">
            <img src={product.image} alt={product.title} height="200px" width="200px" />
        </div>
        <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
                {product.qty} X ${product.price}=${product.qty*product.price}
            </p>
            <button className="btn btn-outline-dark me-4" onClick={()=>delproduct(product)}>
                <i className="fa fa-minus"></i>
            </button><button className="btn btn-outline-dark" onClick={()=>addproduct(product)}>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    </div>
    </div>
    </div>
      </>
    )
})
}
</>
    )
}

return (
    <div>
        {state.length===0?<>
        <h2 className="lead fw-bolder justify-content-center text-center" style={{marginTop:'300px',fontSize:'30px'}}>Your cart is Empty !</h2>
        <Link to="/" className="btn btn-outline-dark text-center justify-content-center me-3 " style={{marginleft:'300px'}}>Click to Shop</Link>
        </>
        :<ShowCart />}
        
        
    </div>
)
    
}
export default Cart