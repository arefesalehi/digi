import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md'

const AccardionItems = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="group flex flex-col border border-gray-300 border-b w-full active:*:scale-95">
      <div
        className="flex justify-between items-center hover:bg-blue-100 h-18 hover:text-blue-600 duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="px-5 duration-300 select-none title">{label} ؟</span>
        <span className="px-5 arrowdon">
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
        </span>
      </div>

      <div
        className={`${
          isOpen
            ? 'p-8 '
            : 'invisible h-0 opacity-0 overflow-hidden whitespace-nowrap'
        } trasition-all duration-300  text-justify`}
      >
        {content}
      </div>
    </div>
  )
}

export default AccardionItems
