import React,{useState,useEffect} from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
const Header = (props) => {

  const state=useSelector((state)=>state.CartReducer)
  const [cartCount, setcartCount] = useState(0)
  let history=useHistory()
  useEffect(()=>{
    let count=0
    state.forEach((item)=>{
        count +=item.qty
    });
    setcartCount(Math.round(count))
},[state,cartCount])

const Logout=()=>{
  sessionStorage.removeItem('token')
  history.push('/')
}
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
        {sessionStorage.getItem('token')===null?
        <>
      <Link to="/login" className="btn btn-outline-dark" >
        <i className="fa fa-sign-in me-1"></i>Login</Link>
        
        <Link to="/signup" className="btn btn-outline-dark ms-2" >
        <i className="fa fa-user-plus me-1"></i>Signup</Link>
        </>:
        <>
        <span className="fw-bold" style={{fontsize:20}}>{props.name}</span>
        <Link to="/cart" className="btn btn-outline-dark ms-2" >
        <i className="fa fa-shopping-cart me-1"></i>Cart({cartCount})</Link>
        <button type="button" onClick={Logout}className="btn btn-outline-dark ms-2" >
        Logout</button>
        </>
}
      </div>
     
    </div>
  </div>
</nav>
        </>

    )
}

export default Header