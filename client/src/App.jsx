import HomePage from "./routes/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listpage/ListPage";
import { Layout, RequireAuth } from "./routes/layout/Layout";
import SinglePage from "./routes/singlepage/Singlepage";
import ProfilePage from "./routes/profilepage/ProfilePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdate";
import NewPostPage from "./routes/newpostpage/NewPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
import ForgotPassword from "./routes/forgotpassword/ForgotPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path:"/forgotpassword",
          element:<ForgotPassword/>
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
