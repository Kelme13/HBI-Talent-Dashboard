import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiBarChartFill,
  RiCheckboxMultipleFill,
  RiLineChartFill,
  RiBookMarkFill,
  RiCalendar2Fill,
  RiArrowRightSFill,
  RiMenu3Line,
  RiCloseLine,
  RiSettings3Line,
  RiUser2Fill,
} from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            HanesBrands <span className="text-primary text-xl">Inc.</span>
          </h1>

          <div className="flex flex-col items-center">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-empresario_53876-5856.jpg"
              className="w-[100px] h-[100px] object-cover rounded-full mt-0 mb-5"
            />
            <h1 className="text-center text-2xl font-bold text-white mb-1">
              Kelvin Melgar
            </h1>

            <h1 className="text-center text-xl font-bold text-gray-500 mb-10">
              Jefe
            </h1>
          </div>

          <ul>
            <li>
              <Link
                to=""
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-white"
              >
                <RiBarChartFill className="text-primary" />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to=""
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-white"
              >
                <RiCheckboxMultipleFill className="text-primary" />
                Evaluaciones
              </Link>
            </li>

            <li>
              <Link
                to=""
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-white"
              >
                <RiLineChartFill className="text-primary" />
                Rendimiento
              </Link>
            </li>

            <li>
              <Link
                to=""
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-white"
              >
                <RiBookMarkFill className="text-primary" />
                Competencias
              </Link>
            </li>

            <li>
              <Link
                to=""
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-white"
              >
                <RiCalendar2Fill className="text-primary" />
                Calendario
              </Link>
            </li>

            <li>
              <Link
                to="/Perfil"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-white"
              >
                <RiUser2Fill className="text-primary" />
                Perfil
              </Link>
            </li>

            <li>
              <button
                onClick={() => setShowSubMenu(!showSubMenu)}
                className=" w-full flex items-center justify-between  py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-white"
              >
                <span className="flex items-center gap-4">
                  <RiSettings3Line className="text-primary" /> Ajustes
                </span>
                <RiArrowRightSFill
                  className={`mt-1 ${
                    showSubMenu && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul
                className={` ${
                  showSubMenu ? "h-[130px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Administrar Empleados
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Administrar Usuarios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Crear Usuario
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to=""
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <TbLogout2 className=" text-gray-500 text-2xl" />
            Cerrar Sesion
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
}

export default Sidebar;
