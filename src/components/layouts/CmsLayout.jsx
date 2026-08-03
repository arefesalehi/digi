import { Outlet } from 'react-router'
import Sidebar from '../templates/dashboard/Sidebar'
import AuthProvider from '../../context/AuthProvider'


const CmsLayout = () => {
  return (
    <AuthProvider>
      <div className="flex">
           
        <div className="bg-gray-50 border-2 border-gray-300 w-80 h-svh">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-gray-50 w-full">
          <Outlet />
        </div>
          
      </div>

    </AuthProvider>
  )
}

export default CmsLayout
