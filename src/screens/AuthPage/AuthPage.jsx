import "./AuthPage.css"
import LoginBox from "../../components/LoginBox/LoginBox"
import SocialMediaImg from "../../assets/loginimg1.svg"
import SocialMediaImg2 from "../../assets/loginimg2.svg"
import {useState} from "react"
import SignupBox from "../../components/SignupBox/SignupBox"
import { useContext } from "react"
import { UserContext,UserProvider } from "../../contexts/UserContext"
const AuthPage = () => {

  const [isLogged, setIsLogged] = useState(true)

  return (
 <div className="AuthPage">
          <div className="AuthPage_Container" style={{flexDirection: isLogged ? "row-reverse" : "row"}}>
                  {
                    isLogged ? (
                      <>
                        <div className="AuthPage__Authform">
                          <LoginBox isLogged={isLogged} setIsLogged={setIsLogged}/>
                        </div>
                        <div className="AuthPage__ImagePresentation ">
                          <img src={SocialMediaImg} alt="social-media-image" />
                        </div>
                    </>
                    ) : (
                      <>
                        <div className="AuthPage__Authform">
                          <SignupBox isLogged={isLogged} setIsLogged={setIsLogged}/>
                        </div>
                        <div className="AuthPage__ImagePresentation ">
                          <img src={SocialMediaImg2} alt="social-media-image" />
                        </div>
                      </>
                    )
                  }
          </div>
      </div>
     
  )
}

export default AuthPage

