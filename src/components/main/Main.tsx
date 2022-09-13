import React from "react";
import Profile from "./Profile";
import Streak from "./Streak";
import Card from "./Card";
import { Row, Col } from "antd";

const Main = () => {
  return (
    <>
      <Profile />
      <Streak />
      <Card />
    </>
  );
};

export default Main;
