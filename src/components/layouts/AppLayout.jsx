import { Outlet } from 'react-router'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Topbar from '../templates/topbar/Topbar'


const AppLayout = () => {
  return (
    <>
      <Topbar/>
      <Header />
      
      <Outlet />
   
      <Footer />
    </>
  )
}

export default AppLayout
