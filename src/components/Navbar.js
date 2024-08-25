import React, { useContext, useEffect, useState } from "react";
// import ThemController from "./ThemController";
import { AuthContext } from "../contexts/UserContext";
import { signOut } from "firebase/auth";
import { notifyError, notifySuccess } from "../utilities/sharedFunctions";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, auth } = useContext(AuthContext);
  const logOut = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("accessToken");
        notifySuccess("Log out successful");
      })
      .catch((error) => {
        notifyError("Something went wrong. Tray again");
      });
  };

  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch("https://bdapis.com/api/v1.2/districts")
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(user);

  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="flex-1 ms-8">
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img
              src="https://i.ibb.co/SNkxymF/android-chrome-192x192.png"
              alt=""
              className="w-10"
            />
            BookCycle
          </Link>
        </div>

        <div className="flex-none gap-2">
          {/* <ThemController></ThemController> */}
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          {user?.uid ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={user?.displayName}
                    src={user?.photoURL}
                    title={user?.displayName}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link to={"/add-book"}>Add Book</Link>
                </li>
                <li>
                  <Link onClick={logOut}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <ul className=" items-center hidden space-x-8 ml-10 lg:flex">
              <li>
                <Link
                  to="/log-in"
                  aria-label="Log in"
                  title="Log in"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-400"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-cyan-400 hover:bg-cyan-600 focus:shadow-outline focus:outline-none"
                  aria-label="Register"
                  title="Register"
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
