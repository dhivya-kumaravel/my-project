import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';"./LoginValidation";
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState(
    {
    email: '',
    password: ''
  }
  ) ; 
  const navigate = useNavigate();
  
  const [errors, setErrors] = useState({})
  
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }
  const handleSubmit=(event)=> {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
    axios.post('https://my-project-server-k1sp.onrender.com/login', values)
      .then(res => {
        if (res.data === "Success") {
          navigate('/home');
        } else {
          alert("No record existed");
        }
      })
      .catch(err => console.log(err));
    }
  //   console.log(values);
  // event className="preventDefault"></event>
  }
  return (
    <div className=' container shadow-2xl rounded-md ml-8 pl-4 border flex justify-center items-center bg-pink-200 h-80'>
      <form action="" onSubmit={handleSubmit} >
        <div className='flex'>
          <label className='my-2' htmlFor="email">Email: </label>
          <input className ='border-2 rounded my-2 ml-4' type="email" placeholder='Enter your email ID...' name='email'
          onChange={handleInput}/>
          {errors.email && <span className='text-red-500'>{errors.email}</span>}
        </div>
        <div>
        <div>
          <label className='my-2' htmlFor="password">Password: </label>
          <input className ='border-2 rounded ml-4' type="password" placeholder='Enter your password...' name='password'
          onChange={handleInput}/>
          {errors.password && <span className='text-red-500'>{errors.password}</span>}
        </div>
        <div>

          <button type='submit' className='border-2 my-2 bg-green-500 p-2 rounded shadow-sm hover:-translate-y-1 hover:scale-110'>Login</button>
          <p className='my-2 border p-2 rounded bg-gray-300'>Agreed Terms and Conditions</p>
          <Link to ='/signup' className='border-2 my-2 bg-blue-500 p-2 rounded shadow-sm hover:-translate-y-1 hover:scale-110'>Create Account</Link>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Login