import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../Utilities/Firebase';
export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const Auth = getAuth(app);
    const emailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const updateUserInfo = update => {
        setLoading(true);
        return updateProfile(Auth.currentUser, update)
    }
    const handleLogOut = (event) => {
        event.preventDefault();
        setLoading(true);
        signOut(Auth)
            .then(() => { })
            .catch(() => { })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            return () => {
                unsubscribe();
            }
        })
    }, [Auth])
    const authData = { emailRegister, updateUserInfo, emailLogin, loading, user, handleLogOut }
    return (
        <AuthProvider.Provider value={authData}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;