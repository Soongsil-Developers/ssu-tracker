import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route index />
      <Route path="/auth">
        <Route path="signIn" />
        <Route path="signUp" />
      </Route>
      <Route path="/profile" />
    </Routes>
  );
};

export default App;
