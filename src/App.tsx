import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";

const App = () => {
  React.useEffect(() => {
    const getUser = async () => {
      const res = await fetch("https://server.com/api/user", {
        method: "GET",
      }).then((res) => res.json());
      console.log(res);
      return res;
    };
    getUser();
  }, []);
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/auth">
        <Route path="signIn" />
        <Route path="signUp" />
      </Route>
      <Route path="/profile" />
    </Routes>
  );
};

export default App;
