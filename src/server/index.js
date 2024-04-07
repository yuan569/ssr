import express from "express";
import { render } from "./utils";
import Routers from "../routers/Routers.js";
import { getServerStore } from "../store";
import { matchRoutes } from "react-router-config";

const app = express();
app.use(express.static("public"));
//使用express提供的static中间件,中间件会将所有静态文件的路由指向public文件夹

app.get("*", (req, res) => {
  const store = getServerStore();
  const promises = [];

  const matchRoutesArr = matchRoutes(Routers, req.path);

  matchRoutesArr.forEach((item, index) => {
    item.route.loadData && promises.push(item.route.loadData(store));
  });
  Promise.all(promises).then(() => {
    res.send(render(req, store));
  });
});

app.listen(3003, () => console.log("Example app listening on port 3003!"));
