import { Outlet } from 'react-router'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
