import React from "react";
import { SearchIcon, PlusIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.svg";
import ProfileMenu from "./ProfileMenu";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ user, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <header className=" bg-white h-16 flex px-2 md:px-10 justify-between gap-3 md:gap-5 items-center">
      <img src={logo} alt="logo-picshare" className="w-20  md:hidden" />
      <div className="flex items-center flex-1">
        <input
          className="bg-gray-200 h-5 p-5 pl-2.5 pr-6 outline-none rounded-md w-full"
          placeholder="What are you searching for?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => navigate("/search")}
        />
        <SearchIcon className="h-4 w-4 -ml-6 text-gray-800" />
      </div>

      <div className="flex items-center gap-4">
        <ProfileMenu user={user} />
        <NavLink
          className="bg-gray-200 text-center text-gray-500 p-2.5 items-center rounded-md
        gap-2 font-bold hidden md:flex"
          to={"/create-pin"}
        >
          <PlusIcon className="w-4 h-4" />
          New Post
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
