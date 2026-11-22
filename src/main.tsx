import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { App } from './App.tsx';


const firebaseConfig = {
  apiKey: "AIzaSyC0ODH4TUHlprmLNSxmvB8jaA4P9u5NNEY",
  authDomain: "chess-518d5.firebaseapp.com",
  projectId: "chess-518d5",
  storageBucket: "chess-518d5.firebasestorage.app",
  messagingSenderId: "776376030160",
  appId: "1:776376030160:web:67e60171cf14f0a97c1fd5",
  measurementId: "G-2RYKE1TSLY"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
