import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { App } from './App.tsx';


const firebaseConfig = {
  piKey: "AIzaSyBvMWgBmKRydzkKdaRFlmdIZtmWZBPZdAI",
  authDomain: "chess-cc5b8.firebaseapp.com",
  projectId: "chess-cc5b8",
  storageBucket: "chess-cc5b8.firebasestorage.app",
  messagingSenderId: "778222792808",
  appId: "1:778222792808:web:da98e985e7e47c5c8e0bdd"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
