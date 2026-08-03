import { NavLink } from 'react-router'

const NavbarItems = ({ title, icon, bgIconColor, bgIcon, href }) => {
  return (
    <div className="flex flex-col gap-1">
      <NavLink
        to={href}
        className={`flex relative items-center gap-2  p-3 pr-5 hover:rounded w-[95%] h-12`}
      >
        {(link) => (
          <>
            {link.isActive && (
              <>
                <div
                  className={`absolute inset-0 right-5 rounded-lg opacity-20 ${bgIconColor}`}
                ></div>

                <span
                  className={`absolute top-0 w-1 rounded-full h-[80%] bottom-0 my-auto right-3 z-0 ${bgIconColor}`}
                ></span>
              </>
            )}

            <span
              className={`${bgIconColor} p-3 rounded   w-10 h-10 ${bgIcon}`}
            >
              {icon}
            </span>
            <p>{title}</p>
          </>
        )}
      </NavLink>
    </div>
  )
}

export default NavbarItems
