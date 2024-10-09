import React from 'react'
import "./LoginBox.css"
import AuthPage from '../../screens/AuthPage/AuthPage'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Auth } from '../../../firebase.config';

const LoginBox = ({setIsLogged}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = ()=>{
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential?.user;
        console.log(user.email)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }



  return (
    <div className="LoginBox">
        <h2>Log In</h2>

        <input type="text" className="Input1" placeholder="Username" onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" className="Input2" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

        <div className="Options1">
          <label className='Checked' >
              <input type="checkbox" />
              <p>Stay logued </p>
          </label>
            <p>forgot password</p>
        </div>

        <button className='LoginButton' onClick={()=>handleLogin()}>Log In</button>

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