import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { App } from './App.tsx';


const firebaseConfig = {
  apiKey: "AIzaSyCJtDnM-e3rhMd7cwYz3RIqlOZcJ5RldiI",
  authDomain: "chess12e.firebaseapp.com",
  projectId: "chess12e",
  storageBucket: "chess12e.appspot.com",
  messagingSenderId: "803635440870",
  appId: "1:803635440870:web:2fd8cab1ac213df7049f27",
  measurementId: "G-91C38N2S7P"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
