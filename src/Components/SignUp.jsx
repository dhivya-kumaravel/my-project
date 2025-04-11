import { useState } from 'react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Validation from './SignUpValidation'
import axios from 'axios'

const SignUp = () => {

    const [values, setValues] = useState(
        { name: '',
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
        if(errors.name === "" && errors.emil === "" && errors.password === "") {
          axios.post('https://my-project-server-k1sp.onrender.com/signup', values)
          .then(res => {navigate('/');})
          .catch(err => console.log(err));
        }
    }
  return (
    <div className=' container shadow-2xl rounded-md ml-8 pl-4 border flex justify-center items-center bg-pink-200 h-80'>
          <form action="" onSubmit={handleSubmit}>
            <div className='flex'>
              <label className='my-2' htmlFor="name">Name: </label>
              <input className ='border-2 rounded my-2 ml-4' type="text" placeholder='Enter your Name here...' name='name' 
              onChange={handleInput}/>
              {errors.name && <span className='text-red-500'>{errors.name}</span>}
            </div>

            <div>
            <label className='my-2' htmlFor="email">Email: </label>
            <input className ='border-2 rounded my-2 ml-4' type="email" placeholder='Enter your email ID...' name='email' 
            onChange={handleInput}/>
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
            </div>
            <div>
            <div>
              <label className='my-2' htmlFor="password">Password: </label>
              <input className ='border-2 rounded ml-4' type="password" placeholder='Enter your password...' name='password' onChange={handleInput}/>
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
            </div>
            <div>
    
              <button className='border-4 my-2 bg-green-500 p-2 rounded shadow-sm hover:-translate-y-1 hover:scale-110'>SignUp</button>
              <p className='my-2 border p-2 rounded bg-gray-300'>You Are Agree to Terms and Conditions</p>
              <Link to ='/login' className='border-4 my-2 bg-blue-500 p-2 rounded shadow-sm hover:-translate-y-1 hover:scale-110'>Login</Link>
            </div>
            </div>
          </form>
        </div>
  )
}

export default SignUp