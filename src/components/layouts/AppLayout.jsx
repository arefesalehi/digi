import { Outlet } from 'react-router'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Topbar from '../templates/topbar/Topbar'
import { Toaster } from 'sonner'
import AuthProvider from '../../context/AuthProvider'

const AppLayout = () => {
  return (
    <>
      <AuthProvider>
        <Toaster position="top-right" />
        <Topbar />
        <Header />

        <Outlet />

        <Footer />
      </AuthProvider>
    </>
  )
}

export default AppLayout
