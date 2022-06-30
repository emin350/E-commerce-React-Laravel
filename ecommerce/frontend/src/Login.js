import React, { useEffect, useState} from 'react'
import Header from './Header'
import { useNavigate } from 'react-router';
import axios from 'axios';

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/add")
    } else {
      navigate("/login")
    }
  }, [])

  const login = async () => {
    let item = { email, password }
    const result = await axios.post("http://localhost:8000/api/login", item)
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add")
  }

  return (
    <div>
      <Header /> <br/>
   <h1>Login Page</h1> 

<div className='col-sm-6 offset-sm-3' >
  <input 
  type="email" 
  placeholder='email' 
  onChange={(e) => setEmail(e.target.value) } 
  className='form-control'
  />

  <br/>

  <input 
  type="password" 
  placeholder='password' 
  className='form-control'
  onChange={(e) => setPassword(e.target.value) }
  />

  <br/>
  <button onClick={login} className='btn btn-primary'>Login</button>

</div>


    </div>
  )
}

export default Login