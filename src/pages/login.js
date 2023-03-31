import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Login({ children, ...restProps }) {
  const nevigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";
  const handleLogic = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      nevigate(ROUTES.DASBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };
  useEffect(() => {
    document.title = "login - instagram";
  }, []);

  return (
    <div className="container flex items-center max-w-screen-md mx-auto h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-center w-full">
          <img src="/images/logo (2).png" className="mt-2 w-6/12 mb-4" />
        </h1>
        {error && <p className="mb-4 text-xs text-red-600">{error}</p>}

        <form onSubmit={handleLogic}>
          <input
            aria-label="Enter your email address"
            placeholder="Email address"
            type="text"
            className="outline-black text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 "
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <input
            aria-label="Enter your email address"
            placeholder="Email address"
            type="password"
            className="outline-black text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={isInvalid}
            type="submit"
            className={`bg-blue-medium  w-full text-white rounded h-8 font-bold ${
              isInvalid && "opacity-50"
            }`}
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border-gray-300 mt-30 rounded">
          <p>
            Don't have account?
            <Link
              to={ROUTES.SINGN_UP}
              className="font-bold text-blue-medium pl-5"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
