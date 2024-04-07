import React from "react"; //引入React以支持JSX的语法
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server"; //引入renderToString方法
import Routers from "../routers/Routers.js";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export const render = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routers)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
        <html>
        <head>
            <title>SSR</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.context = {
                    state: ${JSON.stringify(store.getState())}
                }
            </script>
            <script src='./index.js'></script>
        </body>
        </html>
        `;
};
