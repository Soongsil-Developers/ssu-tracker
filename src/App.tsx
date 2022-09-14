import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

const App = () => {
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
