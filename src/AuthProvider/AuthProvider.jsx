import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInFo = {
        createUser
    }
    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider