import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import { fetchUser } from "../utils/fetchUser";
import { userQuery } from "../utils/data";
import { client } from "../client";

const Home = () => {
  const [user, setUser] = useState(null);

  const userInfo = fetchUser();

  const suscribeUser = () => {
    const query = userQuery(userInfo?.googleId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  };

  useEffect(() => {
    if (!user) {
      suscribeUser();
    }
  });

  return (
    <div className="flex font-sans">
      <Sidebar />
      <Container user={user && user} />
    </div>
  );
};

export default Home;
