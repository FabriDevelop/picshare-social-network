import React from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { PhotographIcon } from "@heroicons/react/outline";
import { categories } from "../utils/data";
import IconCategory from "../utils/iconCategory";

const Sidebar = () => {
  const activeStyles =
    "flex items-center px-5 py-2 gap-3 text-red-600 capitalize font-extrabold border-r-4 border-red-600 text-sm";
  const notActiveStyles =
    "flex items-center px-5 py-2 gap-3 text-gray-400 hover:text-red-600 capitalize font-extrabold hover:border-r-4 border-red-600 text-sm";

  return (
    <aside
      className="hidden md:flex flex-col gap-2 bg-white min-w-[210px]  h-screen
      shadow-md rounded-md pr-0"
    >
      <Link to="/" className="w-40 mt-4 self-center">
        <img src={logo} alt="picshare logo" />
      </Link>
      <nav className="flex flex-col gap-4 items-left pl-3 mt-6">
        <NavLink
          className={({ isActive }) =>
            isActive ? activeStyles : notActiveStyles
          }
          to="/"
        >
          <PhotographIcon className="w-5 h-5" />
          All
        </NavLink>

        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyles : notActiveStyles
            }
            key={category.name}
            to={`/category/${category.name}`}
          >
            <IconCategory
              category={category.name}
              classes="h-4 w-4"
              alt={`${category.name} icon`}
            />
            {category.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
