import { BiNote } from "react-icons/bi"; 
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ?
            "text-hijau bg-green-200 font-extrabold" :
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return (
        <div>
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                        <NavLink id="menu-1" to="/"
                            className={menuClass}>
                            <AiOutlineHome className="mr-4 text-xl" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-2" to="/orders"
                            className={menuClass}>
                            <AiOutlineShoppingCart className="mr-4 text-xl" />
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/customers"
                            className={menuClass}>
                            <AiOutlineUserAdd className="mr-4 text-xl" />
                            Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-4" to="/users"
                            className={menuClass}>
                            <AiOutlineUserAdd className="mr-4 text-xl" />
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-5" to="/NotFound"
                            className={menuClass}>
                            <AiOutlineUserAdd className="mr-4 text-xl" />
                            NotFound
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-6" to="/error400"
                            className={menuClass}>
                            <AiOutlineUserAdd className="mr-4 text-xl" />
                            Error 400
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-7" to="/error401"
                            className={menuClass}>
                            <AiOutlineUserAdd className="mr-4 text-xl" />
                            Error 401
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-8" to="/error403"
                            className={menuClass}>
                            <AiOutlineUserAdd className="mr-4 text-xl" />
                            Error 403
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-4" to="/products" className={menuClass}
                        >
                            <MdFastfood className="mr-4 text-xl" />
                            Products
                        </NavLink>
                    </li>
                     <li>
                        <NavLink id="menu-8" to="/notes" className={menuClass}>
                            <BiNote className="mr-4 text-xl" />
                            Notes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}