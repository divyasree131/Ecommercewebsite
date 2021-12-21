import React,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import  Skeleton  from 'react-loading-skeleton'
const Products = () => {

    const [data, setdata] = useState([])
    const [filter,setfilter]= useState(data)
    const [loading,setloading]= useState(false)
   
useEffect(()=>{
    const getProducts=async()=>{
        setloading(true);
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setdata(response.data)
            setfilter(response.data)
            setloading(false)
            console.log(filter)
        })
            
        
    }
    getProducts()
},[]);

const Loading=()=>{
    return(
        <div className="fw-bolder text-center text-black">
        Loading...
            </div>
       
    )
}

const filterProduct=(cat)=>{
 const UpdatedList=data.filter(x=>x.category===cat)
 setfilter(UpdatedList)
}
const ShowProducts=()=>{
    return(
        <>
        <div className="button me-2 justify-content-center text-center">
        <button type="button" className="btn btn-outline-dark me-2" onClick={()=>setfilter(data)}>All</button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men</button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women</button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewellary</button>
        </div>
        
        {filter.map((product)=>{
            return(
                <>
                <div className="col-md-3 mb-4" style={{marginTop:10}}>
                <div className="card h-100 text-center p-4" key={product.id}>
                    <img className="card-img-top" src={product.image} alt={product.title} height="350px" />
                    <div className="card-body">
                        <h5 className="card-text mb-0">{product.title.substring(0,12)}..</h5>
                        <p className="card-text lead fw-bold">${product.price}</p>
                    </div>
                    <p>
                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                    </p>
                </div>
                </div>
                </>
            )
        })}
        </>
    )
}
    return (
        <div>
            
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 mb-5">
                        <h1>Latest Products</h1>
                    </div>
                </div>
                <div className="row">
                    {loading ?<Loading /> :<ShowProducts /> }
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Products