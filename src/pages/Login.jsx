import React, { useEffect, useState } from "react";
import dx from "../assets/dx-logo.png";
import wp from "../assets/wplogin.png";
import Ups from "../components/Ups";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPopupError, setShowPopupError] = useState(false);
  const [usernameCheck, setUsernameCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // panggil project
  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((response) => response.json())
      .then((data) => {
        setUsernameCheck(data[0].username);
        setPasswordCheck(data[0].password);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [navigate]);

  // handle login
  const handleLogin = () => {
    if (usernameCheck === username && passwordCheck === password) {
      console.log("login berhasil");
    } else {
      console.log("login gagal");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${wp})` }}
      />
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative z-10 w-full max-w-md p-6">
        <div className="bg-white p-8 rounded-md">
          <div className="flex justify-center">
            <img src={dx} alt="dxlogo" className="w-10" />
          </div>
          <form
            className="pt-3"
            onSubmit={
              (e) => {
                e.preventDefault(); // Mencegah refresh halaman
                handleLogin(); // Menjalankan fungsi login
              } // Mencegah refresh halaman
            }
          >
            <label htmlFor="uname" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              className="w-full border-2 border-slate-900 rounded-md px-2 py-1 text-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="mt-2"></div>
            <label htmlFor="pwd" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-slate-900 rounded-md px-2 py-1 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-rose-600 text-slate-100 rounded-md w-full py-2 mt-3 hover:bg-red-700"
            >
              Login
            </button>
          </form>
          <button
            className="bg-slate-800 text-slate-100 rounded-md w-full py-2 mt-2 hover:bg-slate-600"
            onClick={() => setShowPopupError(true)}
          >
            Register
          </button>
          {showPopupError && (
            <Ups
              why={"Registration is not open yet"}
              desc={"we are not ready for this, please try again later"}
              close={setShowPopupError}
            />
          )}
        </div>
      </div>
    </div>
  );
}
