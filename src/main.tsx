import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";

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
  }),
  rest.get("https://server.com/api/error", (req, res, ctx) => {
    return res(ctx.status(500, "error"));
  }),
  rest.get("https://server.com/members/me", (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          name: "박준서",
          email: "oponize@naver.com",
          image: null,
          type: "SSU",
          department: "글로벌미디어학과",
        },
      })
    );
  }),
  rest.get("https://server.com/members/amount", (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          hits: 27,
          amount: 360,
        },
      })
    );
  }),
  rest.get("https://server.com/streaks", (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          data: [],
          mostVisit: "문화관",
          mostStay: "한경직기념관",
        },
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
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
});
