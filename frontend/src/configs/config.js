
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCII4k6327q77Oaojl5yPrt0qs0fyla-ZQ",
  authDomain: "ecommerce-d62b4.firebaseapp.com",
  projectId: "ecommerce-d62b4",
  storageBucket: "ecommerce-d62b4.appspot.com",
  messagingSenderId: "583941784169",
  appId: "1:583941784169:web:c8b8dfcfecb929d84b98f8",
  measurementId: "G-LC0HTH9G3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};

