import { ChatsProvider } from "../contexts/ChatsContext";
import { UserProvider } from "../contexts/UserContext";


function Providers({ children }) {
  return (
      <UserProvider>
        <ChatsProvider>
          {children}
        </ChatsProvider>
      </UserProvider>

  );
}

export default Providers