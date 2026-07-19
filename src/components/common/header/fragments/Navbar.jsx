
import { TbSmartHome } from "react-icons/tb";
import { PiArticleNyTimesDuotone } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <>

    <div className="flex justify-start items-center w-full h-12">
        <ul className="flex justify-start items-center gap-10 mycontainer">
            <li  ><Link to="/" className="flex justify-start items-center gap-1"><TbSmartHome />خانه</Link></li>
            <li><Link to="/article" className="flex justify-start items-center gap-1"><PiArticleNyTimesDuotone />مقاله</Link></li>
            <li><Link to="/about-us" className="flex justify-start items-center gap-1"><FcAbout />درباره ما</Link></li>
            <li><Link to="/contact-us" className="flex justify-start items-center gap-1"><LuPhoneCall />تماس با ما</Link></li>
        </ul>
    </div>

    </>
  )
}

export default Navbar