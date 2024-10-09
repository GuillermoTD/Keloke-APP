import React from 'react'
import "./SignupBox.css"


const SignupBox = ({setIsLogged}) => {
  return (
    <div className='SignupBox'>
        <h2>Sign Up</h2>

        <input type="text" className="Input1" placeholder="Username"/>

        <input type="text" className="Input2" placeholder="Email"/>

        <input type="password" className="Input3" placeholder="Password"/>

        <button className='SignupButton'>SignUp</button>

        <div className="GoogleButton">Google</div>

        <div className='flex gap-1 flex-col items-center text-[0.9rem]' onClick={()=>setIsLogged(true)}>
          Do you have an account?
          <p className='text-emerald-500 cursor-pointer' >
             Log in
          </p>
        </div>
    </div>
  )
}

export default SignupBox