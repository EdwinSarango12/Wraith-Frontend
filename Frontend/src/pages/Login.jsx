import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useFetch from '../hooks/useFetch';
import { ToastContainer } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { fetchDataBackend } = useFetch();

    const loginUser = async (data) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/login`;
        const response = await fetchDataBackend(url, data, 'POST');
        if (response) {
            navigate('/dashboard');
        }
    };

    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Bungee&family=Lato:wght@400;900&family=Roboto:wght@400;700;900&family=Metal+Mania&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div className="flex flex-col sm:flex-row h-screen">
            <ToastContainer />

            {/* Imagen de fondo */}
            <div className="w-full sm:w-8/12 h-1/3 sm:h-screen bg-[url('/public/images/whraite.png')] 
            bg-no-repeat bg-cover bg-center sm:block hidden">
                <img src="/images/wraith.png" alt="Logo sobre fondo" className="absolute top-6 left-5/12 transform -translate-x-8/12 w-[600px] h-auto" />
            </div>

            {/* Contenedor de formulario */}
            <div className="w-full sm:w-4/12 sm:h-screen bg-white flex justify-center items-center">
                <div className="w-full max-w-[500px] px-4">
                    <div className="w-full h-[200px] bg-[url('/images/logo.png')] bg-no-repeat bg-contain bg-center"></div>
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase text-dark-500" style={{ fontFamily: 'Metal Mania, cursive' }}>Sign In</h1>

                    <form onSubmit={handleSubmit(loginUser)}>
                        {/* Correo electrónico */}
                        <div className="mb-3">
                            <input type="email" placeholder="Email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-900"
                                {...register("email", { required: "El correo es obligatorio" })}
                                style={inputStyle} />
                            {errors.email && <p className="text-red-800" style={errorStyle}>{errors.email.message}</p>}
                        </div>

                        {/* Contraseña con botón mostrar/ocultar */}
                        <div className="relative mb-3">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-900"
                                {...register("password", { required: "La contraseña es obligatorio" })}
                                style={inputStyle}
                            />
                            {errors.password && (
                                <p className="text-red-800" style={errorStyle}>
                                    {errors.password.message}
                                </p>
                            )}

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                className="absolute top-1/2 right-3 -translate-y-1/2 bg-transparent border-none cursor-pointer p-0"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.05 10.05 0 0112 20c-6 0-10-8-10-8a18.92 18.92 0 014.05-5.48" />
                                        <path d="M1 1l22 22" />
                                        <path d="M9.88 9.88a3 3 0 014.24 4.24" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Botón de iniciar sesión */}
                        <div className="my-4 flex justify-center">
                            <button className="w-[60px] h-[70px] bg-black text-white border rounded-xl duration-300 
                            hover:bg-gray-900 hover:text-white flex items-center justify-center">
                                <img className="w-12 h-12" src="/images/flecha.png" alt="Flecha icon" />
                            </button>
                        </div>
                    </form>

                    {/* Separador con opción de "O" */}
                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">O</p>
                        <hr className="border-gray-400" />
                    </div>

                    {/* Botón de inicio de sesión con Google */}
                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-black hover:text-white">
                        <img className="w-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google icon" />
                        Sign in with Google
                    </button>

                    {/* Olvidaste tu contraseña */}
                    <div style={{ fontSize: '14px', marginTop: '15px', fontFamily: 'monospace' }}>
                        <Link to="/forgot/id" className=" text-sm text-dark-400 hover:text-gray-900">Forgot your password?</Link>
                    </div>

                    {/* Enlaces para volver o registrarse */}
                    <div className="mt-3 text-sm flex justify-between items-center">
                        <Link to="/" style={{ fontSize: '14px', marginTop: '15px', fontFamily: 'monospace' }}>Return</Link>
                        <Link to="/register" style={{ fontSize: '14px', marginTop: '15px', fontFamily: 'monospace' }} className="py-2 px-5 bg-black text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const inputStyle = {
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    background: '#eeeeee',
    fontSize: '15px',
    fontFamily: 'monospace'
};

const errorStyle = {
    color: 'red',
    fontSize: '0.7rem',
    marginTop: '1px',
    marginBottom: '1px',
    marginLeft: '20px'
};

export default Login;
