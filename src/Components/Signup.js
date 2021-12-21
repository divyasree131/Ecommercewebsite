import axios from 'axios'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const formgroup={marginTop:'8px'}
const card={
	width:'40%',
	height:'60%',
	marginTop:'200px'
}
const Signup = (props) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    let history=useHistory();
    const OnSubmit=async(e)=>{
        e.preventDefault()
        const formobj={
            "name":name,
            "email":email,
            "phone":phone,
            "password":password
        }
        console.log(formobj)

            await axios.post('https://developerjwt.herokuapp.com/api/auth/register',formobj)
            .then(res=>{
				alert(res.data)
                history.push('/')
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
				Register
			</div>
			<div className="card-body">
				
                <form>
				<div ClassName="form-group row" style={formgroup}>
                        <div ClassName="col-sm-10 me-8 ">
                        <input type="text" className="form-control" placeholder="Username" onChange={(e)=>setName(e.target.value) } name="name" value={name}/>
                        </div>
                    </div>
                    <div ClassName="form-group row" style={formgroup}>
                        <div ClassName="col-sm-10">
						<input type="email" className="form-control" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value) }  value={email}/>
                        </div>
                    </div>
					<div ClassName="form-group row" style={formgroup}>
                        <div ClassName="col-sm-10 me-8 ">
                        <input type="text" className="form-control" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} name="password" value={phone}/>
                        </div>
                    </div>
                    <div ClassName="form-group row" style={formgroup}>
                        <div ClassName="col-sm-10 me-8 ">
                        <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} name="password" value={password}/>
                        </div>
                    </div>

                        <div className="form-group" style={formgroup}>
						<input type="submit" value="Register" onClick={OnSubmit}  style={{float:'inline-end'}} className="btn btn-outline-dark " />
					</div>
                    
				</form>
			</div>
		</div>
	</div>
</div>  
        </>
    )
}

export default Signup
