import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {

  const state=useSelector((state)=>state.CartReducer)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4 active" to="/">New Styles</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
      </ul>
      <div className="buttons">

      <Link to="/login" className="btn btn-outline-dark" >
        <i className="fa fa-sign-in me-1"></i>Login</Link>
        
        <Link to="/signup" className="btn btn-outline-dark ms-2" >
        <i className="fa fa-user-plus me-1"></i>Signup</Link>
        <Link to="/cart" className="btn btn-outline-dark ms-2" >
        <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})</Link>
      </div>
     
    </div>
  </div>
</nav>
        </>

    )
}

export default Header