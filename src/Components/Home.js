import React from 'react'
import Products from './Products'

const Home = () => {
    return (
       <>
     <div className="hero">
    <div className="card bg-dark text-white">
 
    <img className="card-img" src="/assets/img2.PNG" alt="" height="600px" width="300px"/>
  <div className="card-img-overlay">
      <div className="col-md-6">
      <h5 className="card-title display-3 fw-bolder mb-0 text-dark ">NEW SEASON ARRIVALS</h5>
      <p className="card-text lead fs-2 text-dark">Check Out All the Trends</p>
      </div>
  </div>
</div>
     </div>
     <Products />
   </>
    )
}

export default Home