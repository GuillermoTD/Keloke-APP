import {useState,useContext} from 'react'
import "./SignupBox.css"
import { DB,Auth } from '../../../firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from "react-router-dom";

const ConfigUser = async(db,userName)=>{

  try {

    //Se agrega al usuario dentro de la base de datos "users"
    const docRef = await addDoc(collection(db, "users"), {
      userName
    });
    console.log('Usuario agregado con éxito:', docRef);

    // Obtener los datos del usuarios recién creado
    const docSnapshot = await getDoc(docRef);
    
    console.log(docSnapshot)

    //En esta seccion se obtiene el username del usuario al registrarse
    if (docSnapshot.exists()) {
      console.log("Datos del documento:", docSnapshot.data());

    } else {
      console.log("No se encontró el documento.");
    }
  } catch (error) {
    console.error('Error al agregar el usuario:', error);
  }

}


const SignupBox = ({setIsLogged}) => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [userName, setUserName] = useState("")
const navigate = useNavigate();

const {user,setUser} = useContext(UserContext)

console.log(user)

const handleSignup = (database,userName)=>{

  createUserWithEmailAndPassword(Auth, email, password)

  .then((userCredential) => {
    const userData = userCredential.user;

    ConfigUser(database,userName)

    setUser({
      user:userName,
      userData
    })
    navigate("/test")
    console.log(user)
    console.log("hola")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}

  return (
    <div className='SignupBox'>
        <h2>Sign Up</h2>

        <input type="text" className="Input1" placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>

        <input type="text" className="Input2" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" className="Input3" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

        <button className='SignupButton' onClick={()=>handleSignup(DB,userName)}>SignUp</button>

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

