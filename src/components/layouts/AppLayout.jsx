import { Outlet } from 'react-router'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Topbar from '../templates/topbar/Topbar'
import { Toaster } from 'sonner'


const AppLayout = () => {
  return (
    <>
       <Toaster position='top-right'/>
      <Topbar/>
      <Header />
      
      <Outlet />
   
      <Footer />
    </>
  )
}

export default AppLayout
