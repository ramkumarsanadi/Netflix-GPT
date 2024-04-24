import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full object-cover object-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-bg"
        />
      </div>
      <form className="p-10 text-white bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl mb-4 ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800"
          />
        )}
        <input
          type="email"
          placeholder="Email Adress"
          className="p-2 my-2 w-full bg-gray-800 bg-opacity-80"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <button className="p-2 my-2 mt-4 rounded-md bg-red-600 text-white w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer">
          {isSignInForm
            ? `Already a user Sign In now} `
            : `New to netflix Sign Up Now`}
        </p>
      </form>
    </div>
  );
};
export default Login;
