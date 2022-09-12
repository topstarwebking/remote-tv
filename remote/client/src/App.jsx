import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Remote from "./pages/Remote";
import { useNavigate, NavLink } from "react-router-dom";
import { NewChannel } from "./pages/NewChannel";
import { ChannelsList } from "./pages/ChannelsList";
import ProtectedRoutes from "./utils/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./components/UI/Button";
import { getAuth, signOut } from "firebase/auth";
import { authActions } from "./store/reducer/auth";

const App = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const user = localStorage.getItem("authToken");
    if (!user) {
      navigate("/login");
    } else {
      dispatch(authActions.login(user));
    }
  }, []);

  const signOutHandler = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        localStorage.removeItem("authToken");
        dispatch(authActions.logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let navLinkActive =
    "font-bold px-3 py-2 border-slate-800 bg-slate-800 text-white rounded-md";
  const navLinkClasses = " px-3 py-2 ";

  return (
    <div>
      {isAuth && (
        <nav className=" border-b shadow-md px-2 py-4 flex items-center justify-between">
          <ul className="flex gap-4 max-w-screen-xl ">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? navLinkActive : navLinkClasses
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="new-channel"
                className={({ isActive }) =>
                  isActive ? navLinkActive : undefined
                }
              >
                New Channel
              </NavLink>
            </li>
            <li>
              <NavLink
                to="channels"
                className={({ isActive }) =>
                  isActive ? navLinkActive : undefined
                }
              >
                Channels
              </NavLink>
            </li>
          </ul>
          <Button
            onClick={signOutHandler}
            variant="sm"
            className="border-red-600 text-red-800  font-semibold"
          >
            Logout
          </Button>
        </nav>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Remote />} />
        </Route>

        <Route path="/channels" element={<ProtectedRoutes />}>
          <Route path="/channels" element={<ChannelsList />} />
        </Route>

        <Route path="new-channel" element={<ProtectedRoutes />}>
          <Route path="/new-channel" element={<NewChannel />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
