import { Link, useNavigate } from "react-router"

const NotFound = () => {
      const navigate= useNavigate()
  return (
        <div className="flex flex-col justify-center items-center p-10">
        <img
          src="/images/Annotation 2026-08-03 125003.png"
          alt="forbidden picture"
        />

        <div className="flex gap-3">
          <Link to='/' className='bg-blue-600 px-5 py-2 rounded text-white'>بازگشت به صفحه اصلی</Link>
          <button onClick={()=>navigate('/')}  className='bg-white px-5 py-2 border border-gray-300 rounded text-black'>بازگشت</button>
        </div>
      </div>
  )
}

export default NotFound