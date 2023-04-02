import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/fribase";
export default function SingUp({ children, ...restProps }) {
  const nevigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Invalid = password === "" || emailAddress === "";
  const isInvalid = "";
  const handleSignUp = async (e) => {
    e.preventDefault();
    const userNameExists = await doesUsernameExist(userName);
    if (!userNameExists) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // authentication
        // -> emailAddress & password & username (displayName)

        await createdUserResult.user.updateProfile({ display: userName });

        // firebase user collection (create a document)
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: userName.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          dateCreated: Date.now(),
        });
        nevigate(ROUTES.DASBOARD);
      } catch (error) {
        setEmailAddress("");
        setFullName("");
        setPassword("");
        setUserName("");
        setError(error.message);
      }
    } else {
      setUserName("");
      setError("That username is already taken, please try another.");
    }
  };
  useEffect(() => {
    document.title = "SignUp - instagram";
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

        <form onSubmit={handleSignUp}>
          <input
            aria-label="Enter your UserName"
            placeholder="Enter your UserName"
            type="text"
            className="outline-black text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            aria-label="Enter your FullName"
            placeholder="Enter your FullName"
            type="text"
            className="outline-black text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 "
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            aria-label="Enter your Emaill"
            placeholder="Enter your Emaill"
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
            Sign-in
          </button>
        </form>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border-gray-300 mt-30 rounded">
          <p>
            Have an account? {``}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
