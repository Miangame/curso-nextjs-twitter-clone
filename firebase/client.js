import * as firebase from 'firebase'

const {NEXT_PUBLIC_FIREBASE_API_KEY} = process.env
console.log(NEXT_PUBLIC_FIREBASE_API_KEY)

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "trying-new-things-991e3.firebaseapp.com",
  databaseURL: "https://trying-new-things-991e3.firebaseio.com",
  projectId: "trying-new-things-991e3",
  storageBucket: "trying-new-things-991e3.appspot.com",
  messagingSenderId: "131047062348",
  appId: "1:131047062348:web:d4f26d7a93edf357bfede9",
  measurementId: "G-EE4D9BVSF3"
}

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider)
}

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged(onChange)
}

export const getCurrentUser = () => firebase.auth().currentUser

!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()