import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import apiClient from "../Config/axiosConfig";
import logo from "../assets/img/logo.png";
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";
import UserMenu from "./UserMenu";
<<<<<<< HEAD
import { Users, UserPlus, List , Truck, DollarSign } from "lucide-react";
import '../styles/nav.css'
=======
import {
  Users,
  UserPlus,
  List,
  Truck,
  Package,
  RefreshCcw,
  LucideTrendingUpDown,
  UserCheck,
  ShoppingCart,
  ClipboardList,
  DollarSign,
  ShoppingBag 
} from "lucide-react";
import "../styles/nav.css";
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
const handleLogout = async () => {
  try {
    await apiClient.post("/auth/logout");
    window.location.href = "/";
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    alert("Ocurrió un error al intentar cerrar la sesión.");
  }
};

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg fixed-top card rounded">
      <div className="container">
        <Link to="/index" className="navbar-brand">
          <img src={logo} width="55" height="50" alt="Logo Inventiory" className="rotate-center"/>
=======
    <nav className="navbar navbar-expand-lg fixed-top  ">
      <div className="container">
        <Link to="/dashboard" className="navbar-brand">
          <img
            src={logo}
            width="55"
            height="50"
            alt="Logo Inventiory"
            className="rotate-center"
          />
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav me-auto ">
<<<<<<< HEAD

             {/* Expenses managenent */}
             <NavbarDropdown text="Gastos" icon={DollarSign}>
              <NavbarItem
                url="/expenseRegister"
                icon={Truck}
                text="Registrar Gasto"
              /> 
              <NavbarItem
                url="/expenseList"
                icon={List}
                text="Lista de Gastos"
              />
            </NavbarDropdown>
             {/* clients managenent */}
             <NavbarDropdown text="Clientes" icon={Truck}>
              <NavbarItem
                url="/clientRegister"
                icon={Truck}
                text="Registrar Cliente"
              />
              <NavbarItem
                url="/clientsList"
                icon={List}
                text="Lista de Clientes"
              />
            </NavbarDropdown>
     
            {/* providers managenent */}
            <NavbarDropdown text="Proveedores" icon={Truck}>
=======
            {/* products managenent */}
            <NavbarDropdown text="Productos" icon={Package}>
              <hr />
              <NavbarItem
                url="/productRegister"
                icon={Package}
                text="Registrar Producto"
              />
              <hr />
              <NavbarItem
                url="/productsList"
                icon={List}
                text="Lista de Productos"
              />
              <hr />
               <NavbarItem
                url="/stocksList"
                icon={ClipboardList}
                text="Ver Stcoks"
              />
              <hr />
                {/* <NavbarItem
                  url="/updateStock"
                  icon={RefreshCcw}
                  text="Actualizar Stocks"
                />
                <hr /> */}

              <NavbarItem
                url="/updatePrice"
                icon={LucideTrendingUpDown}
                text="Actualización de Precios"
              />
              <hr />
            </NavbarDropdown>
            {/* providers managenent */}
            <NavbarDropdown text="Proveedores" icon={Truck}>
              <hr />
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
              <NavbarItem
                url="/providerRegister"
                icon={Truck}
                text="Registrar Proveedor"
              />
<<<<<<< HEAD
=======
              <hr />
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
              <NavbarItem
                url="/providerList"
                icon={List}
                text="Lista de Proveedores"
              />
<<<<<<< HEAD
            </NavbarDropdown>


            {/* users managenent */}
            <NavbarDropdown text="Usuarios" icon={Users}>
=======
              <hr />
            </NavbarDropdown>
            {/* clients managenent */}
            <NavbarDropdown text="Clientes" icon={UserCheck}>
              <hr />
              <NavbarItem
                url="/clientRegister"
                icon={UserCheck}
                text="Registrar Cliente"
              />
              <hr />
              <NavbarItem
                url="/clientsList"
                icon={List}
                text="Lista de Clientes"
              />
              <hr />
            </NavbarDropdown>
       
            {/* buys managenent */}
            <NavbarDropdown text="Compras" icon={ShoppingCart}>
              <hr />
              <NavbarItem
                url="/buyRegister"
                icon={ShoppingCart}
                text="Registrar Compra"
              />
              <hr />
              <NavbarItem
                url="/buistHistory"
                icon={List}
                text="Historial de Compras"
              />
              <hr />
              <li className="mx-5">Otros Gastos  </li><hr />
              <NavbarItem
                url="/expenseRegister"
                icon={DollarSign}
                text="Registrar Gasto"
              />
              <hr />
              <NavbarItem
                url="/expensesList"
                icon={List}
                text="Lista de Gastos"
              />
         <hr />
            </NavbarDropdown>
      
             {/* Sales managenent */}
             <NavbarDropdown text="Ventas" icon={ShoppingBag}>
              <hr />
              <NavbarItem
                url="/saleRegister"
                icon={Truck}
                text="Registrar Venta"
              />
              <hr />
              <NavbarItem
                url="/salesList"
                icon={List}
                text="Historial de Ventas"
              />
           <hr />
            </NavbarDropdown>
            {/* users managenent */}
            <NavbarDropdown text="Usuarios" icon={Users}>
              <hr />
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
              <NavbarItem
                url="/userRegister"
                icon={UserPlus}
                text="Registrar Usuario"
              />
<<<<<<< HEAD
=======
              <hr />
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
              <NavbarItem
                url="/userList"
                icon={List}
                text="Lista de Usuarios"
              />
<<<<<<< HEAD
            </NavbarDropdown>
            
=======
              <hr />
            </NavbarDropdown>
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
          </ul>

          {/* Menú de Usuario */}
          <ul className="navbar-nav ms-auto">
            <UserMenu handleLogout={handleLogout} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
