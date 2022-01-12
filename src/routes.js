
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
  
];

export default dashboardRoutes;
