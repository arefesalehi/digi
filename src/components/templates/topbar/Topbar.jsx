import { BsBasket } from 'react-icons/bs'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'

const Topbar = () => {
  return (
    <div className="bg-[#f2f5fc]">
      <div className="flex justify-between items-center w-full h-30 mycontainer">
        <div>
          <img src="/images/1.png" alt="logo" />
        </div>
        <div className="serachbox">
          <form>
            <label
              htmlFor="search"
              className="sr-only mb-2 font-medium text-gray-900 dark:text-white text-sm"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                className="block bg-[#e3edfe] shadow-xs p-3 ps-9 pr-10 border border-default-medium focus:border-brand rounded-base focus:ring-brand w-150 h-13 text-heading placeholder:text-body text-sm"
                placeholder="متن جست و جوی شما"
                required
              />
              <button
                type="button"
                className="bottom-1.5 box-border absolute inset-e-1.5 bg-brand hover:bg-brand-strong shadow-xs p-15 px-3 py-1.5 border border-transparent rounded focus:outline-none focus:ring-4 focus:ring-brand-medium font-medium text-white text-xs leading-5"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-between items-center gap-2 icons login-register">
          <span className="flex justify-center items-center bg-blue-600 rounded w-12 h-12">
            <BsBasket className="text-white" />
          </span>
          <span className="flex justify-center items-center bg-blue-600 rounded w-12 h-12">
            <MdOutlineNotificationsActive className="text-white" />
          </span>
          <span className="flex justify-center items-center bg-blue-600 rounded w-12 h-12">
            <FaRegHeart className="text-white" />
          </span>
          <button className="flex justify-center items-center gap-2 bg-blue-600 p-3 rounded">
            {' '}
            <FaUser className="text-white" />
            <p className='text-white'>ورود و عضویت</p> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
