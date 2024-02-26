import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn && storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/subir-noticia");
    } catch (error) {
      setError(
        "Error al iniciar sesión. Por favor, verifica tus credenciales."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Iniciar Sesión
        </h2>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="password" className="leading-7 text-sm text-gray-600">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          onClick={handleLogin}
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Iniciar Sesión
        </button>
        {isLoggedIn && (
          <p className="text-green-500 mt-2">¡Inicio de sesión exitoso!</p>
        )}
      </div>
    </div>
  );
};

export default Login;
