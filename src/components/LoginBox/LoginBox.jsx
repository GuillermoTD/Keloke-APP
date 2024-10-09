import React from 'react'
import "./LoginBox.css"

const LoginBox = ({setIsLogged}) => {
  return (
    <div className="LoginBox">
        <h2>Log In</h2>
        <input type="text" className="Input1" placeholder="Username"/>

        <input type="password" className="Input2" placeholder="Password"/>

        <div className="Options1">
          <label className='Checked' >
              <input type="checkbox" />
              <p>Stay logued </p>
          </label>
            <p>forgot password</p>
        </div>

        <button className='LoginButton'>Log In</button>

        <div className="GoogleButton">Google</div>

        
        <div className='flex gap-1 text-[0.9rem]' onClick={()=>setIsLogged(false)}>
          Not signed up?
          <p className='text-emerald-500 cursor-pointer ' >
             Sign in
          </p>
        </div>
    </div>
  )
}

export default LoginBox