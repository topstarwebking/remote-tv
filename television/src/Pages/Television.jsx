import React, { useEffect, useState, useRef } from "react";

import db from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

import { Canvas } from "./Canvas";
import { Spinner } from "../Components/Spinner";
export const Television = () => {
  const [channels, setChannels] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // Listen for current channel from firebase
    onValue(ref(db, "remote"), (snapshot) => {
      const res = snapshot.val();
      setCurrent(res.current);
    });

    // Get Channels from firebase
    getChannels();
  }, []);

  const getChannels = () => {
    // setLoading(true);
    onValue(
      ref(db, "channels"),
      (snapshot) => {
        const res = snapshot.val();
        if (res) setChannels(Object.values(res));
        else setChannels(null);
        setLoading(false);
      },
      { onlyOnce: true }
    );
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner size="lg" />
        </div>
      ) : (
        <>
          {channels ? (
            <Canvas channel={channels[current - 1]} channelNumber={current} />
          ) : (
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="my-3 text-xl font-semibold">No Channel Found</p>
              {/* <Button onClick={getChannels} variant="sm">
                Reload Channels
              </Button> */}
            </div>
          )}
        </>
      )}
    </>
  );
};
