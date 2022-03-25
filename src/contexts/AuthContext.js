import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firbase-config';
// import { AuthServices } from '../services/auth-services';
import UserService, { userFields } from '../services/users-service';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        // return auth.createUserWithEmailAndPassword(email, password)
    }

    function login() {
        console.log('logging in');
        // return AuthServices.signInWithMetaMask();
    }

    async function fetchUesr(user) {

        if (user === null) {
            return setCurrentUser(null);
        }

        const account = user.uid;

        if (currentUser === null || account !== currentUser.id) {

            // Fetch User Information from firebase
            const user = await UserService.getUserById(account);
            if (user) {
                // user exists, get user info
                console.log('get existing user', user);
            } else {
                // user does not exist, creat user
                console.log('create new user', user);
                // need to return user from setDoc
                user = await UserService.createUser(account,
                    userFields
                        .setName('nike')
                        .setMembership('basic')
                        .setUsertype('sponsor')
                        .getFields()
                )
            }

            // Store current account in state and localstorage
            setCurrentUser(user);
            // window.localStorage.setItem('userAccount', account);
        }
    }

    function logout() {
        console.log('logging out');
        // return AuthServices.signOutOfFirebase();
        // if (response.status === 200) {
        //     setCurrentUser(null);
        //     window.localStorage.removeItem('userAccount');
        // } else {
        //     window.alert(response.message);
        // }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {

            console.log('on auth state changed', user);
            fetchUesr(user);
            // const account = window.localStorage.getItem('userAccount');

            setLoading(false)
        })

        return unsubscribe
    }, [])


    // useEffect(() => {
    //     if (currentAccount && user === null) {
    //       UserService.getUserById(currentAccount).then((user) => {
    //         setUser(user);
    //       });
    //     }
    //   })

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}