import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/UI/Button";

export const ChannelsList = () => {
  const [channels, setChannels] = useState({
    // Df: { name: "dfa", image: "fad" },
  });
  useEffect(() => {
    async function getChannels() {
      try {
        const response = await axios.get("http://localhost:3001/channels", {
          headers: {
            Authorization: localStorage.getItem("authToken"),
          },
        });
        const data = response.data;
        if (data) setChannels(data);
      } catch (e) {
        console.log(e);
        alert("Server Error");
      }
    }
    getChannels();
  }, []);

  const handleDeleteChannel = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3001/channel/${id}`, {
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      });
      if (res.status === 200)
        setChannels((prev) => {
          var data = { ...prev };
          delete data[id];
          return data;
        });
    } catch (e) {
      console.log(e);
      alert("Server Error");
    }
  };
  var count = 0;
  return (
    <div className=" max-w-screen-xl mx-auto mt-2 ">
      {Object.keys(channels).length !== 0 ? (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                channel number
              </th>
              <th scope="col" className="py-3 px-6">
                name
              </th>
              <th scope="col" className="py-3 px-6">
                image-src
              </th>
              <th scope="col" className="py-3 px-6">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(channels).map((item) => {
              count++;
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={item}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {count}
                  </th>
                  <td className="py-4 px-6">{channels[item].name}</td>
                  <td className="py-4 px-6">{channels[item].image}</td>
                  <td className="py-4 px-6">
                    <Button
                      variant="sm"
                      className=" border-red-800 text-red-900 hover:bg-red-100 transition-colors font-semibold"
                      onClick={() => {
                        handleDeleteChannel(item);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-2xl font-semibold text-center">No Channels Found</p>
      )}
    </div>
  );
};
