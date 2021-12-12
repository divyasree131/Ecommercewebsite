import React,{useState,useEffect}from 'react'
import axios from 'axios'
import  Skeleton  from 'react-loading-skeleton'
import {NavLink} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import {AddCart} from '../Redux/Action/index'

const Productdetails = (props) => {
    
    const id=props.match.params.id
    console.log(id)
    const [Productdetail, setProductdetail] = useState([])
    const [loading,setloading]= useState(false)
    const dispatch = useDispatch();
    const addproduct=(Productdetail)=>{
        dispatch(AddCart(Productdetail))
    }

useEffect(()=>{
    const getProducts=async()=>{
        setloading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProductdetail(response.data)
            setloading(false)
            console.log(Productdetail)
        })
            
        
    }
    getProducts()
},[]);

const Loading=()=>{
    return(
        <>
        <div className="fw-bolder text-center text-black-50">
        Loading...
            </div>
        </>
    )
}

const ShowProducts1=()=>{
    return(
        <>
      
        <div className="col-md-6">
            <img src={Productdetail.image} alt={Productdetail.tite} height="400px" width="400px"/>
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{Productdetail.category}</h4>
            <h1 className="display-5">
                {Productdetail.title}
            </h1>
            <p className="lead fw-bolder">{Productdetail.rating && Productdetail.rating.rate}<i className="fa fa-star"></i></p>
        <h3 className="display-6 fw-bolder my-4">${Productdetail.price}</h3>
        <p className="lead">{Productdetail.description}</p>
        <NavLink to="/cart" onClick={()=>addproduct(Productdetail)} className="btn btn-outline-dark">Add Cart</NavLink>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2 ">Go to cart</NavLink>
        </div>

        </>
    )
}
    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1>Latest Products</h1>
                    </div>
                </div>
                <div className="row">
                    {loading ?<Loading /> :<ShowProducts1 /> }
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Productdetails
