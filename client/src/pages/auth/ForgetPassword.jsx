import { RiMailFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] text-center">
      <div className="flex items-center justify-center py-3 px-4">
        <img
          src="https://images.ctfassets.net/bxvspbo2e7cv/5vYiVmmZOOnlcFFnX7DVd5/bff73a66c8bcf1d743f30965bd773313/1200px-Hanes-logo.svg.png"
          className="w-[150px] h-[130px]"
        />
      </div>

      <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-14">
        Recuperar Contraseña
      </h1>
      <form className="bg-secondary-100 mb-16 ">
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className="py-3 px-4 pl-8 bg-secondary-900 w-full outline-none rounded-lg "
            placeholder="Correo electronico"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary text-white  font-bold w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Enviar Instrucciones
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-4 items-center ">
        <span className="flex items-center gap-2">
          Ya tienes cuenta?
          <Link to="/auth" className="hover:text-primary transition-colors">
            Inicia Sesion
          </Link>
        </span>

        <span className="flex items-center gap-2">
          No tienes cuenta?{" "}
          <Link
            to="/auth/registro"
            className="text-primary/90 hover:text-gray-100 transition-colors"
          >
            Registrate
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ForgetPassword;
