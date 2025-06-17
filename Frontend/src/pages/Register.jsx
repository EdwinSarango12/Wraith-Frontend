import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Bungee&family=Lato:wght@400;900&family=Roboto:wght@400;700;900&family=Metal+Mania&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return () => {
      document.head.removeChild(link);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.post("https://wraith-24zv.onrender.com/api/registro", {
        nombre: data.nombre,
        apellido: data.apellido,
        username: data.username,
        email: data.email,
        password: data.password
      });
      toast.success("Registro exitoso");
    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Error en el registro");
    }
  };

  return (
    <div
      className={`flex ${windowWidth < 1000 ? 'flex-col' : 'flex-row'} w-screen h-[100dvh] fixed top-0 left-0 overflow-hidden font-roboto`}
    >
      {windowWidth >= 1000 && (
        <div className="relative w-2/3 h-full bg-[#d87e36] overflow-hidden font-bungee">
          <img
            src="/images/register2.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute top-2 left-2 flex items-center gap-0.2 whitespace-nowrap pointer-events-none z-30 text-white font-bold text-x"
            style={{ fontFamily: "'Bungee', cursive" }}>
            <img
              src="/images/delta.png"
              alt="studio logo"
              className="h-10 aspect-square object-contain brightness-0 invert"
            />
            Delta Studio
          </div>
          <h1 className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-[110%] w-[40vw] text-black text-6xl text-center z-30">
            <img src="/images/wraith.png" alt="Wraith" className="wraith-logo" />
          </h1>
        </div>
      )}


      <div
        className={`bg-white h-full flex flex-col items-center justify-center ${
          windowWidth < 1000 ? "w-full" : "w-1/3"
        } px-5 sm:px-16 md:px-20 font-mono box-border`}
      >
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[160px] mb-1"
        />
        <h2 className="text-xl sm:text-4xl mb-1 font-cursive" style={{ fontFamily: "'metal mania', cursive" }}>Register</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-xs flex flex-col gap-1"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("nombre", { required: true })}
            className="p-3 rounded-xl bg-gray-200 text-base font-mono focus:outline-none focus:ring-2 focus:ring-black-700"
            style={{fontFamily:"monospace"}}
          />
          {errors.nombre && (
            <p className="text-red-600 text-xs ml-5 mt-0.1 mb-0.1">Nombre requerido</p>
          )}

          <input
            type="text"
            placeholder="Last Name"
            {...register("apellido", { required: true })}
            className="p-3 rounded-xl bg-gray-200 text-base font-mono focus:outline-none focus:ring-2 focus:ring-black-700"
            style={{fontFamily:"monospace"}}
          />
          {errors.apellido && (
            <p className="text-red-600 text-xs ml-5 mt-0.1 mb-0.1">Apellido requerido</p>
          )}

          <input
            type="text"
            placeholder="User"
            {...register("username", { required: true })}
            className="p-3 rounded-xl bg-gray-200 text-base font-mono focus:outline-none focus:ring-2 focus:ring-black-700"
            style={{fontFamily:"monospace"}}
          />
          {errors.username && (
            <p className="text-red-600 text-xs ml-5 mt-0.1 mb-0.1">Usuario requerido</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="p-3 rounded-xl bg-gray-200 text-base font-mono focus:outline-none focus:ring-2 focus:ring-black-700"
            style={{fontFamily:"monospace"}}
          />
          {errors.email && (
            <p className="text-red-600 text-xs ml-5 mt-0.1 mb-0.1">Email requerido</p>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
              className="p-3 pr-10 rounded-xl bg-gray-200 text-base font-mono focus:outline-none focus:ring-2 focus:ring-black-700 w-full"
              style={{fontFamily:"monospace"}}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-transparent border-none cursor-pointer p-0"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="gray"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.05 10.05 0 0112 20c-6 0-10-8-10-8a18.92 18.92 0 014.05-5.48" />
                  <path d="M1 1l22 22" />
                  <path d="M9.88 9.88a3 3 0 014.24 4.24" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-600 text-xs ml-5 mt-0.1 mb-0.1">Contraseña requerida</p>
          )}

          <button
            type="submit"
            className="mt-5 py-4 bg-black text-white rounded-3xl text-lg cursor-pointer hover:bg-orange-800 duration-300"
            style={{fontFamily:"monospace"}}
          >
            Register
          </button>
        </form>

        <p className="text-sm mt-4" style={{fontFamily:"monospace"}}>
          ¿You have an account?{" "}
          <Link to="/login" className="text-black underline font-bold" style={{fontFamily:"monospace"}}>
            Log in
          </Link>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
};
