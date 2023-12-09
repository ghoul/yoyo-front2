import OneTrick from "../views/OneTrick.js";
import CategoriesList from "../views/Categories.js";
import FullLayout from "../layouts/FullLayout.js"; 


import Starter from "../views/Starter.js";
import Login from "../views/Login.js";
import SignUp from "../views/SignUp.js";
import Category from "../views/Category.js";
import Trick from "../views/OneTrick.js";
import UpdateTrick from "../views/UpdateTrick.js";
import UpdateCategory from "../views/UpdateCategory.js";
import UpdateComment from "../views/UpdateComment.js";
import Add from "../views/Add.js";
import AddCategory from "../views/AddCategory.js";
import About from "../views/About.js";
import Alerts from "../views/ui/Alerts";
import Badges from "../views/ui/Badges";
import Buttons from "../views/ui/Buttons";
import Cards from "../views/ui/Cards";
import Grid from "../views/ui/Grid";
import Tables from "../views/ui/Tables";
import Forms from "../views/ui/Forms";
import Breadcrumbs from "../views/ui/Breadcrumbs";


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
