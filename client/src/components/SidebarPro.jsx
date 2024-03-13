import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  menuClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  RiBarChartFill,
  RiTaskFill,
  RiCheckboxMultipleFill,
  RiEqualizerFill,
  RiLineChartFill,
  RiBookMarkFill,
  RiLogoutCircleFill,
  RiCalendar2Fill,
  RiArrowRightSFill,
  RiMenu2Fill,
} from "react-icons/ri";

function SidebarPro() {
  return (
    <Sidebar className="bg-secondary-100"
    rootStyles={{
      background:
        '#1E1F25',
    }}
    >
      <Menu
        rootStyles={{
          [`.${menuClasses.icon}`]: {
            margin: '30px 0px',
            color: '#ED2224',
          },
        }}
      >
        <MenuItem icon={<RiMenu2Fill />} component={<Link to="/" />}></MenuItem>
        <MenuItem icon={<RiBarChartFill />} component={<Link to="/" />}>
          Dashboard
        </MenuItem>
        <MenuItem icon={<RiCheckboxMultipleFill />} component={<Link to="/" />}>
          Evaluaciones
        </MenuItem>
        <MenuItem icon={<RiLineChartFill />} component={<Link to="/" />}>
          Rendimiento
        </MenuItem>
        <MenuItem icon={<RiBookMarkFill />} component={<Link to="/" />}>
          Competencias
        </MenuItem>
        <MenuItem icon={<RiCalendar2Fill />} component={<Link to="/" />}>
          Calendario
        </MenuItem>
        <SubMenu icon={<RiEqualizerFill />} label="Configuraciones">
          <MenuItem> Administrar Empleados </MenuItem>
          <MenuItem> Administrar Usuarios </MenuItem>
          <MenuItem> Crear Usuario </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default SidebarPro;
