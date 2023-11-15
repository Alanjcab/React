import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaFVvSm-Bmlc3rYDfXiI2iup-_fTmSZ3U",
  authDomain: "proyecto-react-coder-2b3db.firebaseapp.com",
  projectId: "proyecto-react-coder-2b3db",
  storageBucket: "proyecto-react-coder-2b3db.appspot.com",
  messagingSenderId: "554737876939",
  appId: "1:554737876939:web:7b0c75c86031ccd177804e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <App />
    </ChakraProvider>
)
