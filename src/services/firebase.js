import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

export const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

if (typeof window !== undefined && !firebase.apps.length) {
  firebase.initializeApp(config)
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email, uid, photoURL, providerData } = userAuth

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
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user: ', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase
