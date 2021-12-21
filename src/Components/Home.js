import React,{useState,useEffect} from 'react'
import Products from './Products'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import Header from './Header'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  let history=useHistory()
   
  const [LoginUser,setLoginUser]=useState([])
  useEffect(() => {
    fetch('https://developerjwt.herokuapp.com/api/auth/userinfo',{
      method:'GET',
      headers:{
        "x-access-token":sessionStorage.getItem('token')
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setLoginUser(data)
      sessionStorage.getItem('LoginUser',LoginUser)
    })
    
  },[])
  console.log(LoginUser)
  if(sessionStorage.getItem('token')===null){
    history.push('/')
  }
    return (
      
       <>
       <Header name={LoginUser.name}/>
     <div className="hero">
    <div className="card bg-dark text-white">
 
    <img className="card-img" src="/assets/img2.PNG" alt="" height="800px" />
  <div className="card-img-overlay">
      <div className="col-md-6">
      <h5 className="card-title display-3 fw-bolder mb-0 text-dark ">NEW SEASON ARRIVALS</h5>
      <p className="card-text lead fs-2 text-dark">Check Out All the Trends</p>
      </div>
  </div>
</div>
     </div>
     <div>
         <Products />
     </div>
     <footer>
     <Footer />
     </footer>
   
   </>
    )
  
}

export default Home