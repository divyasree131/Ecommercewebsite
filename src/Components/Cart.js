import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

import { useDispatch} from 'react-redux'
import {AddCart,DelCart} from '../Redux/Action/index'
import {Link} from 'react-router-dom'
const Cart = () => {
    const state =useSelector((state)=>state.CartReducer)
    
   console.log(state)
   const dispatch = useDispatch();
   const [cartCount, setcartCount] = useState(0)
   const addproduct=(Productdetail)=>{
    dispatch(AddCart(Productdetail))
}
const delproduct=(Productdetail)=>{
dispatch(DelCart(Productdetail));
}
   
useEffect(()=>{
    let itemtotal=0
    state.forEach((item)=>{
        itemtotal+=item.qty*item.price
    });

    setcartCount(Math.round(itemtotal))
},[state,cartCount])

const ShowCart=()=>{
    return (
        <>
            <h2 className="text-center">Shopping Cart</h2>
{state.map((product)=>{
    return (
        <>
        <div ClassName="cart-Items">
        <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
              
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
    </div>
      </>
    )
})
}
    <div className="Cart-total" >
        <div className='row fw-bolder text-center text-black'>
        <h2>Order Details</h2>
            <div className='col-6'>
              
                <p>Bag total</p>
                <p>Shipping Charges</p>
                <p>Tax </p>
                <p>Total Amount</p>
            </div>
            <div className='col-6'>
                <p>${cartCount}</p>
                <p>Free</p>
                <p>$5</p>
                <p>${cartCount+5}</p>
            </div>
        </div>
    </div>
        <div className="row" style={{display:'inline-block',marginLeft:'45%',marginTop:'10px'}}>
        <Link to ="/Checkout"  className="btn btn-outline-dark text-center" >ConFirm Order</Link>
        </div>
</>
    )
}

return (
    <div>
        {state.length===0?<>
        <h2 className="lead fw-bolder justify-content-center text-center" style={{marginTop:'300px',fontSize:'30px'}}>Your cart is Empty !</h2>
        <div className="row" style={{display:'inline-block',marginLeft:'45%',marginTop:'10px'}}>
        <Link to ="/home"  className="btn btn-outline-dark text-center" >Click here to Shop</Link>
        </div>
        </>
        :<ShowCart />}
        
        
    </div>
)
    
}
export default Cart