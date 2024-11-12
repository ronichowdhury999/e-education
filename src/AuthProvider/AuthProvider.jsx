import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userUpdateProfile = async (name, photoUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }
    const googleSignInUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLoginUser = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const forgatePasswordEmailReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [user]);
    const authInFo = {
        createUser,
        signInUser,
        userUpdateProfile,
        googleSignInUser,
        githubLoginUser,
        logOut,
        forgatePasswordEmailReset,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider