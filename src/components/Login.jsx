import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import "../index.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BG_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //Sign in / sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const signedUpUser = userCredential.user;

          updateProfile(signedUpUser, {
            displayName: name.current.value,
            photoURL: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(signedUpUser);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const signedInUser = userCredential.user;
          navigate("/browse");
          console.log(signedInUser);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full object-cover object-center after-page ">
        <div className="relative fade-overlay">
          <img src={BG_IMG_URL} alt="login-bg" />
        </div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-10 text-white bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl mb-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Adress"
          className="p-2 my-2 w-full bg-gray-800 bg-opacity-80"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <p className="font-bold py-2 text-red-600">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 my-2 mt-4 rounded-md bg-red-600 text-white w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInform} className="py-4 cursor-pointer">
          {!isSignInForm
            ? `Already a user Sign In now`
            : `New to netflix? Sign Up Now`}
        </p>
      </form>
    </div>
  );
};
export default Login;
