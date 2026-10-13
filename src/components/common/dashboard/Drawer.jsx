

import { IoClose } from "react-icons/io5";

const Drawer = ({ children, title, isOpen, onClose }) => {
  return (
    <>
      {/* پس‌زمینه طوسی هنگام باز شدن Drawer */}
      {isOpen && (
        <div
          onClick={onClose}
          className="z-40 fixed inset-0 bg-gray-900/40 backdrop-blur-[1px]"
        />
      )}

      {/* پنل Drawer */}

      
      <div
        className={`absolute top-0 right-0 z-50
          w-100 max-w-full min-h-svh h-auto pb-5
          bg-white shadow-xl
          transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col w-full h-full">
          {/* Header */}
          <div className="flex justify-between items-center px-3 border-gray-300 border-b h-14">
            <span className="font-bold text-sm">{title}</span>

            <button
              type="button"
              onClick={onClose}
              className="text-xl cursor-pointer"
              aria-label="بستن پنل"
            >
              <IoClose />
            </button>
          </div>

          {/* Content */}
          <div>{children}</div>
        </div>
      </div>

   


    </>
  );
};

export default Drawer;

