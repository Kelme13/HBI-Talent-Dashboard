import {
  RiMailFill,
  RiLockFill,
  RiEyeFill,
  RiEyeCloseFill,
  RiUserFill,
} from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] text-center">
      <div className="flex items-center justify-center py-3 px-4">
        <img
          src="https://images.ctfassets.net/bxvspbo2e7cv/5vYiVmmZOOnlcFFnX7DVd5/bff73a66c8bcf1d743f30965bd773313/1200px-Hanes-logo.svg.png"
          className="w-[150px] h-[130px]"
        />
      </div>

      <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-14">
        Crear cuenta
      </h1>
      <form className="bg-secondary-100 mb-16 ">
        <button className="flex items-center justify-center gap-4 py-3 px-4 bg-secondary-900 w-full text-center rounded-full mb-8 text-gray-100">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            className="w-5 h-5 "
          />
          Ingresa con Google
        </button>
        <div className="relative mb-4">
          <RiUserFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            className="py-3 px-4 pl-8 bg-secondary-900 w-full outline-none rounded-lg "
            placeholder="Nombre(s)"
          />
        </div>
        <div className="relative mb-4">
          <RiUserFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            className="py-3 px-4 pl-8 bg-secondary-900 w-full outline-none rounded-lg "
            placeholder="Apellido(s)"
          />
        </div>
        <div className="relative mb-8">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className="py-3 px-4 pl-8 bg-secondary-900 w-full outline-none rounded-lg "
            placeholder="Correo electronico"
          />
        </div>
        <div className="relative mb-4">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "password" : "text"}
            className="py-3 px-4 pl-8 bg-secondary-900 w-full outline-none rounded-lg "
            placeholder="Contraseña"
          />
          {showPassword ? (
            <RiEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          ) : (
            <RiEyeCloseFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          )}
        </div>

        <div className="relative mb-4">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "password" : "text"}
            className="py-3 px-4 pl-8 bg-secondary-900 w-full outline-none rounded-lg "
            placeholder="Confirmar Contraseña"
          />
          {showPassword ? (
            <RiEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          ) : (
            <RiEyeCloseFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          )}
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary text-white  font-bold w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Registrarme
          </button>
        </div>
      </form>

      <span className="flex items-center gap-2 justify-center">
        Ya tienes cuenta?{" "}
        <Link
          to="/auth"
          className="text-primary/90 hover:text-gray-100 transition-colors"
        >
          Inicia Sesion
        </Link>
      </span>
    </div>
  );
}

export default Register;
