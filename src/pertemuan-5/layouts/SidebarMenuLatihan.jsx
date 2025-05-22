import { RiCustomerService2Fill } from "react-icons/ri";
import { MdDashboard, MdBorderColor } from "react-icons/md";

export default function SidebarMenuLatihan() {
  return (
    <ul id="menu-list" className="space-y-3">
      <li id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
        <div>
          <MdDashboard className="mr-4 text-x" />
        </div>
        <span>Dashboard</span>
      </li>

      <li id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
        <div>
          <MdBorderColor className="mr-4 text-x" />
        </div>
        <span>Orders</span>
      </li>

      <li id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
        <div>
          <RiCustomerService2Fill className="mr-4 text-x" />
        </div>
        <span>Customer</span>
      </li>
    </ul>
  );
}
