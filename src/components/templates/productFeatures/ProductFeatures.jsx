import { FaComment } from 'react-icons/fa6'
import { FaSquare } from 'react-icons/fa'

import { FaShare } from 'react-icons/fa'
import {  useState } from 'react'

const ProductFeatures = () => {
  const [isCopied, setIsCopied] = useState(false)
  const [isshow, setIsshow] = useState(false)
  const copyHandler = async () => {
    const url = `${location.origin}${location.pathname}`

    await navigator.clipboard.writeText(url)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  const commentHandler = () => {
    setIsshow((prev) => !prev)
    document.getElementById('productComment')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setTimeout(() => {
      setIsshow(false)
    }, 1000)
  }



  return (
    <div className="border border-gray-300 rounded-xl h-150">
      {/* باتن های اشتراک گذاری و نظرات*/}
      <div className="flex justify-end items-center p-8 h-15">
        <span className="flex gap-3">
          <span className="relative flex justify-around items-center border border-gray-300 rounded w-8 h-8">
            <button onClick={copyHandler} type="button">
              {' '}
              <FaShare />{' '}
            </button>

            <div
              id="tooltip-click"
              role="tooltip"
              className={`absolute bottom-10 left-1/2 z-10 inline-block -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-xs transition-opacity ${
                isCopied ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              کپی شد
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </span>




          <span className="relative flex justify-around items-center border border-gray-300 rounded w-8 h-8">
            <button onClick={commentHandler} type="button">
              {' '}
              <FaComment />{' '}
            </button>

            <div
              id="tooltip-click"
              role="tooltip"
              className={`absolute bottom-10 left-1/2 z-10 inline-block -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-xs transition-opacity ${
                isshow ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              نظرات کاربران
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </span>
        </span>
      </div>

      {/* دوقسمت تصویر و ویژگی های محصول*/}
      <div className="flex">
        {/*قسمت تصویر محصول */}
        <span className="w-1/2">
          <img src="/images/product1.png" alt="iphone" />
        </span>

        {/*قسمت ویژگی های محصول*/}
        <span className="px-2 w-1/2">
          <h1 className="mt-5 mb-3">
            مانیتور گیمینگ ایسوس مدل FGHJVKD سایز 27 اینچ
          </h1>
          <span className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            assumenda.
          </span>

          {/*رنگ بندی*/}
          <h1 className="mt-10 mb-3">رنگ بندی :</h1>
          <div className="flex flex-wrap gap-2">
            <div className="flex justify-start items-center gap-1 bg-blue-100 px-2 border border-blue-500 rounded w-37 h-8 text-xs">
              <FaSquare />
              مشکی
            </div>
            <div className="flex justify-start items-center gap-1 bg-blue-100 px-2 border border-blue-500 rounded w-37 h-8 text-xs">
              <FaSquare />
              مشکی
            </div>
            <div className="flex justify-start items-center gap-1 bg-blue-100 px-2 border border-blue-500 rounded w-37 h-8 text-xs">
              <FaSquare />
              مشکی
            </div>
            <div className="flex justify-start items-center gap-1 bg-blue-100 px-2 border border-blue-500 rounded w-37 h-8 text-xs">
              <FaSquare />
              مشکی
            </div>
            <div className="flex justify-start items-center gap-1 bg-blue-100 px-2 border border-blue-500 rounded w-37 h-8 text-xs">
              <FaSquare />
              مشکی
            </div>
          </div>

          {/*ویگی ها */}

          <h1 className="mt-10 mb-3"> ویژگی ها :</h1>
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col gap-2 bg-blue-100 px-2 py-2 rounded w-37 h-18 text-xs">
              <span>پردازنده</span>
              <span className="font-semibold">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="flex flex-col gap-2 bg-blue-100 px-2 py-2 rounded w-37 h-18 text-xs">
              <span>پردازنده</span>
              <span className="font-semibold">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="flex flex-col gap-2 bg-blue-100 px-2 py-2 rounded w-37 h-18 text-xs">
              <span>پردازنده</span>
              <span className="font-semibold">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="flex flex-col gap-2 bg-blue-100 px-2 py-2 rounded w-37 h-18 text-xs">
              <span>پردازنده</span>
              <span className="font-semibold">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="flex flex-col gap-2 bg-blue-100 px-2 py-2 rounded w-37 h-18 text-xs">
              <span>پردازنده</span>
              <span className="font-semibold">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="flex flex-col gap-2 bg-blue-100 px-2 py-2 rounded w-37 h-18 text-xs">
              <span>پردازنده</span>
              <span className="font-semibold">Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}

export default ProductFeatures
