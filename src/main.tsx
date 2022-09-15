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
  rest.get("https://server.com/members/allLog", (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          data: [
            {
              inOut: "in",
              date: new Date(2022, 8, 15, 17, 0),
              type: "중앙도서관",
            },
            {
              inOut: "out",
              date: new Date(2022, 8, 15, 19, 0),
              type: "중앙도서관",
            },
            {
              inOut: "in",
              date: new Date(2022, 8, 10, 13, 30),
              type: "정보과학관",
            },
            {
              inOut: "out",
              date: new Date(2022, 8, 10, 14, 50),
              type: "정보과학관",
            },
            {
              inOut: "in",
              date: new Date(2022, 3, 15, 7, 5),
              type: "학생회관",
            },
            {
              inOut: "out",
              date: new Date(2022, 3, 15, 17, 5),
              type: "학생회관",
            },
            {
              inOut: "in",
              date: new Date(2022, 3, 16, 7, 5),
              type: "문화관",
            },
            {
              inOut: "out",
              date: new Date(2022, 3, 16, 17, 5),
              type: "문화관",
            },
            {
              inOut: "in",
              date: new Date(2022, 2, 15, 7, 5),
              type: "신양관",
            },
            {
              inOut: "out",
              date: new Date(2022, 2, 15, 17, 5),
              type: "신양관",
            },
            {
              inOut: "in",
              date: new Date(2022, 1, 15, 7, 5),
              type: "안익태기념관",
            },
            {
              inOut: "out",
              date: new Date(2022, 1, 15, 17, 5),
              type: "안익태기념관",
            },
          ],
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
