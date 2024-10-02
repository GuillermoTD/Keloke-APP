import {userContext,createContext} from "react"


const ChatContext = createContext()

export const ChatsProvider = ({children})=>{

    const [activeScreen, setActiveScreen] = useState('Active')
    const [currentChat, setCurrentChat] = useState({})

    const changeScreen = (screen = null, chat = null)=>{
        setActiveScreen(screen)
        // set chat in case is neccesary
        if(chat){
            setCurrentChat(chat)
        }
    }

    return(
        <ChatContext.Provider value={{activeScreen,currentChat,changeScreen}}>
            {children}
        </ChatContext.Provider>
    )
}


