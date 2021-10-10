import { createContext, useEffect, useState } from 'react'
import Router from 'next/router'
import toast from 'react-hot-toast'
import useTranslation from 'next-translate/useTranslation'

import firebase, { firestore } from '@/services/firebase'

const AuthContext = createContext()

const createUserProfileDocument = async (user) => {
  const userRef = firestore.doc(`users/${user.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email, uid, photoURL, providerData } = user

    const createdAt = new Date()

    try {
      await userRef.set({
        uid,
        displayName,
        email,
        photoURL,
        createdAt,
        providerId: providerData[0].providerId,
        phoneNumber: '',
        deliveryAddress: {
          street: '',
          city: '',
          postalCode: '',
          country: '',
        },
        deliverySameAsBilling: true,
        billingAddress: {
          street: '',
          city: '',
          postalCode: '',
          country: '',
        },
        isAdmin: false,
      })
    } catch (error) {
      console.log('Error creating user: ', error.message)
    }
  }

  return snapShot
}

export function AuthProvider({ children }) {
  const { t } = useTranslation('common')
  const [user, setUser] = useState(null)

  const login = t(`success-login`)
  const logout = t(`success-logout`)

  const handleUser = async (currentUser) => {
    if (currentUser) {
      await createUserProfileDocument(currentUser)

      const collectionRef = firestore.collection('users').doc(currentUser.uid)

      const snapShot = await collectionRef.get()

      setUser(snapShot.data())

      return snapShot.data()
    }

    setUser(false)

    return false
  }

  const signinGoogle = async () => {
    try {
      const response = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

      await handleUser(response.user)

      toast.success(login)

      Router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const signout = async () => {
    try {
      await firebase.auth().signOut()

      handleUser(false)

      toast.success(logout)

      Router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signinGoogle,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext
