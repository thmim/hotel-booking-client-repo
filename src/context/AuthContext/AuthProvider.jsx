import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = () =>{
      setLoading(true)
      return signOut(auth)  
    }
    const googleLogInUser = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser)
          setLoading(false)
       })
       return ()=>{
        unsubscribe();
       }
    },[])
    const authInfo ={
         loading,
         createUser,
         signInUser,
         user,
         setUser,
         signOutUser,
         googleLogInUser
    }
    return (
        <AuthContext value={authInfo}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;