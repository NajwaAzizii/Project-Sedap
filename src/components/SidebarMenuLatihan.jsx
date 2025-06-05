import { MdOutlineFoodBank } from "react-icons/md"; 
import { BiUser } from "react-icons/bi"; 
import { BiMessageRoundedError } from "react-icons/bi"; 
import { BiErrorAlt } from "react-icons/bi"; 
import { BiMessageAltError } from "react-icons/bi"; 
import { MdErrorOutline } from "react-icons/md"; 
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdDashboard, MdBorderColor } from "react-icons/md";
import { Link, NavLink } from "react-router-dom"

export default function SidebarMenu() {
  
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${isActive ? 
        "text-hijau bg-green-200 font-extrabold" : 
        "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`

  return (
    <ul id="menu-list" className="space-y-3">
      <li>
        <NavLink
          id="menu-1" to="/"
          className={menuClass}
        >
          <MdDashboard className="mr-4 text-x" />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          id="menu-2" to="/orders"
          className={menuClass}
        >
          <MdBorderColor className="mr-4 text-x" />
          <span>Orders</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          id="menu-3" to="/customers"
          className={menuClass}
        >
          <RiCustomerService2Fill className="mr-4 text-x" />
          <span>Customer</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          id="menu-7" to="/user"
          className={menuClass}
        >
         <BiUser className="mr-4 text-x" />
          <span>User</span>
        </NavLink>
      </li>
       <li>
        <NavLink
          id="menu-8" to="/products"
          className={menuClass}
        >
         <MdOutlineFoodBank className="mr-4 text-x" />
          <span>Products</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          id="menu-4" to="/error/400"
          className={menuClass}
        >
          <MdErrorOutline className="mr-4 text-x" />
          <span>Error 400</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          id="menu-5" to="/error/401"
          className={menuClass}
        >
          <BiMessageAltError className="mr-4 text-x" />
          <span>Error 401</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          id="menu-6" to="/error/403"
          className={menuClass}
        >
         <BiMessageRoundedError className="mr-4 text-x" />
          <span>Error 403</span>
        </NavLink>
      </li>
      
      
    </ul>
  );
}