import AppLayout from "../components/layouts/AppLayout";
import Home from "../pages/home/Home";
import Article from "../pages/article/article";
import AboutUs from "../pages/about-us/AboutUs";
import ContactUs from "../pages/contact-us/ContactUs";
import Cart from "../pages/cart/Cart";
import Product from "../pages/product/Product";
import { createBrowserRouter } from "react-router";
import AuthLayout from "../components/layouts/AuthLayout";
import AuthPage from "../pages/auth/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "article", element: <Article /> },
      { path: "article/:articleID", element: <Article /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "product/:productID", element: <Product /> },
      { path: "cart", element: <Cart /> },

      {
        path: "auth",
        element: <AuthLayout />,
        children: [{ index: true, element: <AuthPage /> }],
      },
    ],
  },
]);

export default router;
