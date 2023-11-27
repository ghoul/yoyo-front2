import { lazy } from "react";
import { Navigate } from "react-router-dom";
import OneTrick from "../views/OneTrick.js";
import CategoriesList from "../views/Categories.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Login = lazy(() => import("../views/Login.js"));
const SignUp = lazy(() => import("../views/SignUp.js"));
const Category = lazy(() => import("../views/Category.js"));
const Trick = lazy(() => import("../views/OneTrick.js"));
const UpdateTrick = lazy(() => import("../views/UpdateTrick.js"));
const UpdateCategory = lazy(() => import("../views/UpdateCategory.js"));
const UpdateComment = lazy(() => import("../views/UpdateComment.js"));
const Add = lazy(() => import("../views/Add.js"));
const AddCategory = lazy(() => import("../views/AddCategory.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));


/*****Routes******/


const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      // { path: "/", element: <Navigate to="/starter" /> },
      { path: "/", exact: true, element: <Starter /> },

      { path: "/categories", element: <CategoriesList  />},

      { path: "/category/:categoryName", element: <Category  />},
      { path: "/category/:categoryId/edit", element: <UpdateCategory  />},
      { path: "/category/create", element: <AddCategory  />},
      
      { path: "/category/:categoryName/trick/:trickId", element: <OneTrick />},

      { path: "/category/:categoryName/trick/:trickId/edit", element: <UpdateTrick />}, 
      { path: "/category/:categoryName/trick/:trickId/edit/comment/:commentId", element: <UpdateComment />},

      { path: "/login", element: <Login  />},
      { path: "/signup", element: <SignUp  />},

      { path: "/trick", exact: true, element: <Trick /> },
      { path: "/trick/create", exact: true, element: <Add /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
