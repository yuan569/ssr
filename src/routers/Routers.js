import Home from "../containers/Home/Home"; //引入Home组件
import Login from "../containers/Login/Login"; //引入Login组件
import App from "../App"; //引入Login组件

export default [
  {
    path: "/",
    component: App,
    key: "App",
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: "Home",
      },
      {
        path: "/login",
        component: Login,
        exact: true,
        key: "Login",
      },
    ],
  },
];
