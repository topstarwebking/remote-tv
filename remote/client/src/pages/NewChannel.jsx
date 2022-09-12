import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Input } from "../components/UI/Input";
import { Button } from "../components/UI/Button";
import { authActions } from "../store/reducer/auth";

export const NewChannel = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/channels/new",
        {
          name,
          image: imagePath,
        },
        {
          headers: {
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
      navigate("/channels");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center">
      <form className="px-2 py-4 max-w-md" onSubmit={formSubmitHandler}>
        <h2 className="text-3xl font-medium pb-4 ">New Channel</h2>

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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Channel Name"
          type="text"
          required
        />
        <Input
          value={imagePath}
          onChange={(e) => setImagePath(e.target.value)}
          placeholder="Channel image path (/images/{name})"
          type="text"
          required
        />
        <Button className="border-slate-800 bg-slate-800 text-white">
          Add New
        </Button>
      </form>
    </div>
  );
};
