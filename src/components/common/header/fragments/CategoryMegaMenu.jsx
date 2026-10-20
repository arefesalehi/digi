import { useState } from 'react'
import { TbCategory, TbChevronLeft } from 'react-icons/tb'
import { IoIosArrowBack } from 'react-icons/io'
import useCategories from '../../../../hooks/useCategories'

const CategoryMegaMenu = () => {
  const { allCategories, isLoading } = useCategories()
  const [isOpen, setIsOpen] = useState(false)
  const [isActiveCategory, setIsActiveCategory] = useState(null)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <span
        onMouseEnter={handleOpen}
        className="relative flex items-center gap-2 cursor-pointer"
      >
        <TbCategory /> دسته بندی کالاها
      </span>

      {isOpen && !isLoading && allCategories.length > 0 && (
        <div
          onMouseLeave={handleClose}
          className={`top-42.5 z-50 absolute flex bg-white shadow-lg p-4 min-w-40 `}
        >
          <ul>
            {allCategories.map((category) => {
              return (
                <li
                  onMouseEnter={() => setIsActiveCategory(category)}
                  key={category._id}

                  className={`flex items-center gap-5 hover:bg-gray-200 p-2  hover:text-blue-600`}
                >
                  {category.title}
                  <IoIosArrowBack />{' '}
                </li>
              )
            })}
          </ul>

          <div className="bg-white pt-3 pr-6 border-gray-200 border-r">
            {isActiveCategory?.subCategories?.length > 0 ? (
              <div className="gap-10 grid-cols-4! grid!">
                {isActiveCategory?.subCategories?.map((sub) => {
                  return (
                    <div
                      key={sub._id}
                      className="items-center gap-2 grid-col-5"
                    >
                      <span className="flex gap-2 border-gray-200 border-b-2 font-bold hover:text-blue-600">
                        {' '}
                        {sub.title}
                        <TbChevronLeft />
                      </span>
                      <div className="flex flex-col mt-2">
                        {sub?.subCategories?.map((leaf) => {
                          return <div className='hover:text-blue-600' key={leaf._id}>{leaf.title}</div>
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-zinc-400 text-sm">
                زیردسته‌ای برای این دسته‌بندی وجود ندارد.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CategoryMegaMenu
