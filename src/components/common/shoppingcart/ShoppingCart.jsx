import { MdOutlinePhoneInTalk } from "react-icons/md";


const ShoppingCart = () => {
  return (
    <>
      <div className="flex flex-col border border-gray-300 rounded-xl h-100 text-xs">
        <div className="flex items-center gap-4 mt-5">
          <span className="w-20 h-20">
            <img src="/images/product1.png" alt="mini-pic" />
          </span>
          <span className="text-sm">
            مانیتور گیمینگ ایسوس مدل FGHJVKD سایز 27 اینچ
          </span>
        </div>
          

          <div className="flex justify-center items-center bg-orange-200 mt-5 mr-3 border border-orange-400 border-r-5 w-[90%] warning">
            <p className="p-5">به دلیل نوسانات ارزی لغو سفارش بریا این کالا  به دلیلی انصراف از خرید میسر نمی باشد</p>
          </div>


          <span className="mt-15 pl-8 text-xl text-left"> 1758 تومان</span>

          <button className="bg-blue-500 mx-5 mt-3 p-3 rounded text-white">افزودن  به سبد خرید</button>

           <div className="flex justify-between items-center mt-5">
            <span className="px-8 w-3/4">برای مشاوره خرید این کالا با شماره : 093554589</span>
              <span className="px-8 w-1/4"><MdOutlinePhoneInTalk className="w-5 h-5"/></span>
           </div>

      </div>
    </>
  )
}

export default ShoppingCart
