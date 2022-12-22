import { createBrowserRouter } from "react-router-dom";
import App from "../pages/AppPage";
import ErrorPage from "../pages/ErrorPage";
import Orders from "../pages/Orders";

export const routesConfig = [
  {
    path: "/",
    element: <App />,
    errorPageElement: <ErrorPage />,
  },
  {
    path: "/orders",
    element: <Orders />,
    errorPageElement: <ErrorPage />,
  },
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
