
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import ListAdmins from "views/examples/ListAdmins.js";
import ImageUpload from "views/examples/Upload";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },

  {
    path: "/user-profile",
    name: "Perfiles",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },

  {
    path: "/login",
    name: "Login temporal",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Registro temporal",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path:"/ListAdmins",
    name:"Administradores",
    icon:"ni ni-badge text-red",
    component: ListAdmins,
    layout:"/admin"

  },
  {
    path:"/ImageUpload",
    name:"Galería",
    icon:"ni ni-album-2 text-primary",
    component: ImageUpload,
    layout:"/admin"

  }
];
export default routes;
