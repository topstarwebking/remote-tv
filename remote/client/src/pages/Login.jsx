import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/UI/Input";
import { Button } from "../components/UI/Button";
import { authActions } from "../store/reducer/auth";
import { Spinner } from "../components/UI/Spinner";

export const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  if (isAuth) {
    navigate("/");
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        console.log(response);
        const token = response._tokenResponse.idToken;
        localStorage.setItem("authToken", token);
        dispatch(authActions.login(token));
        console.log(token);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.code === "auth/wrong-password") {
          setError("Invalid Password");
        } else if (err.code === "auth/user-not-found") {
          setError("Invalid Email");
        } else {
          setError(err.message);
        }
      });
  };
  return (
    <div className="flex items-center justify-center  max-w-screen-xl mx-auto">
      <form
        className="border max-w-sm px-8 py-4 mt-24 border-slate-800 shadow-sm rounded-md"
        onSubmit={formSubmitHandler}
      >
        <h2 className="text-3xl font-medium pb-6 text-center">Login Form</h2>

        {error && (
          <p className="border border-red-400 bg-red-100 text-red-800 p-2 rounded-sm flex  justify-between">
            {error}
            <span
              className="font-bold cursor-pointer"
              onClick={() => {
                setError("");
              }}
            >
              x
            </span>
          </p>
        )}
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          type="email"
          required
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required
        />
        <Button className="border-slate-800 bg-slate-800 text-white">
          {loading ? <Spinner size="sm" /> : "Login"}
        </Button>
      </form>
    </div>
  );
};
