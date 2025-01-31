import React, { useState } from "react";
import dx from "../assets/dx-logo.png";
import wp from "../assets/wplogin.png";

export default function Login() {
  // State untuk menyimpan nilai inputan
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (username, password) => {
    const response = await fetch("http://localhost:5000/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); // Simpan token
      window.location.href = "/dashboard"; // Redirect ke dashboard
    } else {
      alert("Login gagal");
    }
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah form untuk melakukan submit secara default
    await login(username, password); // Panggil fungsi login dengan username dan password
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="uname" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border-2 border-slate-900 rounded-md px-2 py-1 text-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
              required
            />
            <div className="mt-2"></div>
            <label htmlFor="pwd" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-2 border-slate-900 rounded-md px-2 py-1 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
            <button
              type="submit"
              className="bg-rose-600 text-slate-100 rounded-md w-full py-2 mt-3 hover:bg-red-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
