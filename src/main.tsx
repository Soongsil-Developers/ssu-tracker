import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import App from "./App";

import { setupWorker, rest } from "msw";

const worker = setupWorker(
  // 커스텀 핸들러
  rest.get("https://server.com/api/user", (req, res, ctx) => {
    return res(
      ctx.json({
        email: "example@naver.com",
        nickName: "test",
      })
    );
  })
);

async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start();
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});
