import {
  RiArrowDownSLine,
  RiLogoutCircleLine,
  RiNotification3Line,
  RiSettings3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" h-[6vh] xl:h-[7kvh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center">
        <Menu
          menuButton={
            <MenuButton className=" relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiNotification3Line />
              <span className="absolute -top-0.5 -right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[9px] font-bold">
                2
              </span>
            </MenuButton>
          }
          key="left"
          direction="left" 
          align="start"
          transition
          menuClassName="bg-secondary-100 p-4 "
        >
          <h1 className="text-gray-300 text-center">Notificaciones</h1>
          <MenuItem>Submenu</MenuItem>
          <MenuItem>Submenu</MenuItem>
        </Menu>

        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2  hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
              
              <img
                src="https://img.freepik.com/vector-gratis/ilustracion-empresario_53876-5856.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Kelvin Melgar</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-4 flex-1">
              <img
                src="https://img.freepik.com/vector-gratis/ilustracion-empresario_53876-5856.jpg"
                className="w-8 h-8 object-cover rounded-full "
              />
              <div className="flex flex-col  text-sm">
                <span className="text-sm">Kelvin Melgar</span>
                <span className="text-xs text-gray-500">
                  kelvinmelgar777@gmail.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500 rounded-lg" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-4 flex-1"
            >
              <RiSettings3Line className="text-xl" />
              <span>Configuracion</span>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/auth"
              className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-4 flex-1"
            >
              <RiLogoutCircleLine className="text-xl" />
              <span>Cerrar Sesion</span>
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
}

export default Header;
