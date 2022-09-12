import React, { useState, useEffect } from "react";
import db from "../utils/firebase";
import { ref, update, onValue, off } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import axios from "axios";
import { Button } from "../components/UI/Button";
import { Spinner } from "../components/UI/Spinner";

const Remote = () => {
  const [current, setCurrent] = useState(1);
  const [haveChannels, setHaveChannels] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [channels, setChannels] = useState({ data: {}, count: 0 });
  const [isActiveButton, setIsActiveButton] = useState({
    left: false,
    right: false,
  });
  useEffect(() => {
    async function getChannels() {
      const response = await axios.get("http://localhost:3001/channels", {
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      });
      const data = response.data;
      if (data)
        setChannels({
          data: data,
          count: Object.keys(data).length,
        });
    }
    getChannels();
  }, []);
  useEffect(() => {
    // Channel Change Listener from firebase
    const currentChannelRef = ref(db, "remote");
    onValue(currentChannelRef, (snapshot) => {
      const res = snapshot.val();
      setCurrent(res.current);
      setIsLoading(false);
    });
    setIsLoading(false);
    // return () => {
    //   updateData(1);
    // };
  }, []);

  useEffect(() => {
    handleButtonDisable();
  }, [current, channels]);

  const handleButtonDisable = () => {
    const count = channels.count;
    if (count === 0) {
      setHaveChannels(false);
      // alert("fed");
      return setIsActiveButton({ left: true, right: true });
    }
    setHaveChannels(true);

    if (count === 1) {
      return setIsActiveButton({ left: true, right: true });
    }
    switch (current) {
      case 0:
        setIsActiveButton({ left: true, right: false });
        break;
      case 1 && channels.count === 1:
        setIsActiveButton({ left: true, right: true });
        break;
      case 1:
        setIsActiveButton({ left: true, right: false });
        break;
      case channels.count:
        setIsActiveButton({ left: false, right: true });
        break;

      default:
        setIsActiveButton({ left: false, right: false });
        break;
    }
  };

  const handleNext = () => {
    // if (current === 0) return;
    if (current === channels.count) return;
    updateData(current + 1);
  };
  const handlePrev = () => {
    if (current === 0) return;
    if (current === 1) return;
    updateData(current - 1);
  };

  const updateData = (value) => {
    axios.post(
      "http://localhost:3002/update",
      { data: value },
      {
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      }
    );
  };

  return (
    <div className="mx-auto w-fit flex flex-col text-center items-center justify-center mt-4 border border-slate-300 px-6 py-4 rounded-md shadow-md">
      <div className="mb-6 flex flex-col gap-5 ">
        <p className="font-bold text-2xl  ">Current Channel</p>
        {isLoading ? (
          <p className="m-auto">
            <Spinner />
          </p>
        ) : (
          <p className="text-2xl font-bold ">
            {haveChannels ? current : "No Channels Found"}
          </p>
        )}
      </div>

      <div className="flex gap-4 w-52 mb-3 items-center justify-center">
        <Button
          size="md"
          {...(isActiveButton.left ? { disabled: true } : {})}
          className="bg-indigo-700 text-2xl text-white  flex items-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed"
          onClick={() => {
            handlePrev();
          }}
        >
          <AiFillCaretLeft />
          <span>Prev</span>
        </Button>
        <Button
          {...(isActiveButton.right ? { disabled: true } : {})}
          size="md"
          className="bg-indigo-700 text-2xl text-white  flex items-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed"
          onClick={() => {
            handleNext();
          }}
        >
          <span>Next</span> <AiFillCaretRight />
        </Button>
      </div>
    </div>
  );
};

export default Remote;
