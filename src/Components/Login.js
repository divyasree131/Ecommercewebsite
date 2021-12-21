import React,{useState}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const formgroup={marginTop:'8px'}
    const card={
        width:'40%',
        height:'60%',
        marginTop:'200px'
    }
const Login = (props) => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Error,setError]=useState('')
    
	let history=useHistory();
    const OnSubmit=async(e)=>{
        e.preventDefault()
        const formobj={
        
            "email":email,
            "password":password
        }
        console.log(formobj)

            await axios.post('https://developerjwt.herokuapp.com/api/auth/login',formobj)
            .then(res=>{
				console.log(res)
				if(res.data.auth===true){
					sessionStorage.setItem('token',res.data.token)
					history.push('/home')
				}
				else{
					setError(res.data.token)
					console.log(Error)
				}
			}

               
            )
            .catch(error=>console.log(error))
        
    }
    return (
        <>
          <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card" style={card}>
			<div className="card-header fw-bold">
				Login
			</div>
			<div className="card-body">
				
                <form>
                    <div ClassName="form-group row" style={formgroup}>
                        <div ClassName="col-sm-10">
                        <input type="email" className="form-control" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value) }  value={email}/>
                        </div>
                    </div>
                    <div ClassName="form-group row" style={formgroup}>
                        <div ClassName="col-sm-10 me-8 ">
                        <input type="password" className="form-control" placeholder="password" onChange={(e)=>setPassword(e.target.value)} name="password" value={password}/>
                        </div>
                    </div>
                        <div className="form-group" style={formgroup}>
						<input type="submit" value="Login" onClick={OnSubmit} className="btn btn-outline-dark " />
					</div>
                    <p>Don't have account ? <Link to="/signup">Click here to register</Link></p>
				</form>
			</div>
		</div>
	</div>
</div>  
        </>
    )
}

export default Login
