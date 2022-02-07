import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Navbar from "./Navbar";
import NewPin from "./NewPin";
import PinDetail from "./PinDetail";
import Search from "./Search";
import UserProfile from "./UserProfile";

const Container = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col flex-1">
      <Navbar
        user={user && user}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/category/:categoryId" element={<Feed />} />
        <Route path="/create-pin" element={<NewPin user={user} />} />
        <Route path="/pin-detail/:pinId" element={<PinDetail user={user} />} />
        <Route path="/user-profile/:userId" element={<UserProfile />} />
        <Route path="/search" element={<Search searchTerm={searchTerm} />} />
      </Routes>
    </div>
  );
};

export default Container;
