import AppLayout from '../components/layouts/AppLayout'
import Home from '../pages/home/Home'
import Article from '../pages/article/article'
import AboutUs from '../pages/about-us/AboutUs'
import ContactUs from '../pages/contact-us/ContactUs'
import Cart from '../pages/cart/Cart'
import Product from '../pages/product/Product'
import { createBrowserRouter, redirect } from 'react-router'
import AuthLayout from '../components/layouts/AuthLayout'
import AuthPage from '../pages/auth/AuthPage'
import CmsLayout from '../components/layouts/CmsLayout'
import DashboradHome from '../pages/dashboard/moderator/home/DashboradHome'
import DashboardOrder from '../pages/dashboard/moderator/order/DashboardOrder'
import DashboardProducts from '../pages/dashboard/moderator/products/DashboardProducts'
import * as AuthService from '../service/auth.service'
import Forbidden from '../pages/forbidden/Forbidden'
import NotFound from '../pages/notfound/NotFound'

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
      {path:'forbidden' , element :<Forbidden/> },
      {path:'*' , element :<NotFound/> },


      {
        path: 'auth',
        element: <AuthLayout />,
        children: [{ index: true, element: <AuthPage /> }],
      },
    ],
  },

  {
    path: '/dashboard',
    element: <CmsLayout />,
    children: [
      {
        path: 'moderator',
        loader: async () => {
          try {
            const {data} = await AuthService.getMe()
            console.log('res===>',data.user.roles)
            if (!data.user.roles.includes('ADMIN')) {
              return redirect('/forbidden')
            }
            return data.user 
          } catch (error) {
            console.log(error);
            return redirect('/auth')
          }
        },
        children: [
          { index: true, loader: () => redirect('home') },
          { path: 'home', element: <DashboradHome /> },
          { path: 'order', element: <DashboardOrder /> },
          { path: 'products', element: <DashboardProducts /> },
        ],
      },
    ],
  },
])

export default router
