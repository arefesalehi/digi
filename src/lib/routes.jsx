import AppLayout from '../components/layouts/AppLayout'
import Home from '../pages/home/Home'
import Article from '../pages/article/article'
import AboutUs from '../pages/about-us/AboutUs'
import ContactUs from '../pages/contact-us/ContactUs'
import Cart from '../pages/cart/Cart'
import Product from '../pages/product/Product'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'article', element: <Article /> },
      { path: 'article/:articleID', element: <Article /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'product/:productID', element: <Product /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
])

export default router
