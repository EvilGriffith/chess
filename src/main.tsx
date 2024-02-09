import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { App } from './App.tsx';


const firebaseConfig = {
  apiKey: "AIzaSyByl2XP3lQG_yFtFsnYuIW4nOr1NrGgmUk",
  authDomain: "chess-a7b72.firebaseapp.com",
  projectId: "chess-a7b72",
  storageBucket: "chess-a7b72.appspot.com",
  messagingSenderId: "389872725642",
  appId: "1:389872725642:web:9c17f480f7ab76be2cc773",
  measurementId: "G-WV4RT2Y3GL"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
