/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Books from "views/books/Books";
import AddBook from "views/books/AddBook";
import EditBook from "views/books/EditBook";
import EditUser from "views/users/EditUser";
import AddUser from "views/users/AddUser";
import Users from "views/users/Users";
import AddFacture from "views/factures/Addfac";
import EditFacture from "views/factures/EditFac";
import Factures from "views/factures/Factures";
import AddCommande from "views/commandes/AddCom";
import EditCommande from "views/commandes/EditCom";
import Commandes from "views/commandes/Commandes";

const dashboardRoutes = [
  {
    name: "addUser",
    path: "/user/add",
    component: AddUser,
    layout: "/admin",
    subRoute:true,
  },
  {
    name: "editUser",
    path: "/user/edit/:id",
    component: EditUser,
    layout: "/admin",
    subRoute:true,
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: Users,
    layout: "/admin",
  },
  {
    name: "addFacture",
    path: "/facture/add",
    component: AddFacture,
    layout: "/admin",
    subRoute:true,
  },
  {
    name: "editFacture",
    path: "/facture/edit/:id",
    component: EditFacture,
    layout: "/admin",
    subRoute:true,
  },
  {
    path: "/facture",
    name: "Facture",
    icon: "nc-icon nc-money-coins",
    component: Factures,
    layout: "/admin",
  },
  {
    name: "addBook",
    path: "/book/add",
    component: AddBook,
    layout: "/admin",
    subRoute:true,
  },
  {
    name: "editBook",
    path: "/book/edit/:id",
    component: EditBook,
    layout: "/admin",
    subRoute:true,
  },
  {
    path: "/books",
    name: "Books",
    icon: "nc-icon nc-single-copy-04",
    component: Books,
    layout: "/admin",
  },
  {
    name: "addCommande",
    path: "/commande/add",
    component: AddCommande,
    layout: "/admin",
    subRoute:true,
  },
  {
    name: "editCommande",
    path: "/commande/edit/:id",
    component: EditCommande,
    layout: "/admin",
    subRoute:true,
  },
  {
    path: "/commande",
    name: "Commandes",
    icon: "nc-icon nc-delivery-fast",
    component: Commandes,
    layout: "/admin",
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
