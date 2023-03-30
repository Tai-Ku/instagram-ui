import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login({ children, ...restProps }) {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Invalid = password === "" || emailAddress === "";

  const handleLogic = () => {};
  useEffect(() => {
    document.title = "login - instagram";
  }, []);

  return (
    <div className=" flex items-center">
      <p>i am login</p>
      <p>i am login</p>
    </div>
  );
}
