import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // creating user
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unsubscribe();
        }
    })

    // updating user info
    const updateUserInfo = (profile) => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile)
    }

    // signing user
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoader(true);
        localStorage.removeItem('accessToken');
        return signOut(auth);
    }

    const googleProvider = new  GoogleAuthProvider();

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const value = {
        user,
        loader,
        setLoader,
        createUser,
        updateUserInfo,
        signIn,
        logOut,
        googleSignIn
    }
    return (
        <div>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>        
        </div>
    );
};

export default AuthProvider;