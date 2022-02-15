import React, { useContext, useState, useEffect } from 'react';
// import { auth } from '../firbase-config';
import { AuthServices } from '../services/auth-services';
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

    async function login() {
        const account = await AuthServices.signInWithMetaMask()
        await fetchUesr(account);
        setLoading(false)

        // return auth.signInWithEmailAndPassword(email, password)
    }

    async function fetchUesr(account) {

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
            window.localStorage.setItem('userAccount', account);
        }
    }

    function logout() {
        console.log('logging out');

        setCurrentUser(null);
        window.localStorage.removeItem('userAccount');
        setLoading(false)

        // return auth.signOut()
        return false;
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user)
    //         setLoading(false)
    //     })

    //     return unsubscribe
    // }, [])
    useEffect(() => {
        const account = window.localStorage.getItem('userAccount');
        console.log('mount', account);
        if (account !== null) {
            fetchUesr(account);
        }
        setLoading(false);
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