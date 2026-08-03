import { TbLogout2 } from 'react-icons/tb'
import NavbarItems from './NavbarItems'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineProduct } from 'react-icons/ai'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

import { LuStore } from 'react-icons/lu'
import { BiDollarCircle } from 'react-icons/bi'
import { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'
import { useNavigate } from 'react-router'

const Sidebar = () => {
  const { logOut, refreshUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    } finally {
      refreshUser()
      navigate('/auth' , {replace:true})
    }
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mt-10">
        <NavbarItems
          title="پیشخوان"
          icon={<AiOutlineHome />}
          bgIconColor="bg-gray-200"
          bgIcon="text-gray-900"
          href="/dashboard/moderator/home"
        />
        <NavbarItems
          title="محصولات"
          icon={<AiOutlineProduct />}
          bgIconColor="bg-green-200"
          bgIcon="text-green-900"
          href="/dashboard/moderator/products"
        />
        <NavbarItems
          title="سفارشات"
          icon={<MdOutlineProductionQuantityLimits />}
          bgIconColor="bg-orange-200"
          bgIcon="text-orange-900"
          href="/dashboard/moderator/order"
        />
        <NavbarItems
          title="کاربران"
          icon={<FaUser />}
          bgIconColor="bg-yellow-200"
          bgIcon="text-yellow-600"
          href="/dashboard/moderator/users"
        />
        <NavbarItems
          title="فروشنده ها"
          icon={<LuStore />}
          bgIconColor="bg-blue-200"
          bgIcon="text-blue-900"
          href="/dashboard/moderator/sellers"
        />
        <NavbarItems
          title="تخفیفات"
          icon={<BiDollarCircle />}
          bgIconColor="bg-red-200"
          bgIcon="text-red-900"
          href="/dashboard/moderator/discount"
        />
      </div>

      <div
        onClick={logoutHandler}
        className={`flex mb-8  items-center gap-2 hover:bg-gray-100 p-3 pr-5 hover:rounded w-[95%] h-12`}
      >
        <TbLogout2
          className={` bg-gray-200 p-3 rounded   w-10 h-10 text-blue-900`}
        />
        <p>خروج از حساب</p>
      </div>
    </div>
  )
}

export default Sidebar
