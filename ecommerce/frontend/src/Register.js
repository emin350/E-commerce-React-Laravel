import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Header from './Header';

function Register() {

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate("/add")
    }
  },[])
  const endpoint = "http://localhost:8000/api/register"
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  const signUp = async () => {
    let item = { name, password, email }

    const result = await axios.post(endpoint, item)
           localStorage.setItem("user-info",JSON.stringify(result))
           navigate("/add")
  }

  return (
      <>  
       <Header />
    <div className='col-sm-6 offset-sm-3'>
      <h1>Register Page</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} className='form-control' placeholder='name' />
      <br />
      <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='email' />
      <br />
      <input type="password" onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='password' />
      <br />
      <button onClick={signUp} className='btn btn-primary'>Sign Up</button>
</div>
    </>
  )
}

export default Register