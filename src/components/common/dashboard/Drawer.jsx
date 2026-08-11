import { IoClose } from "react-icons/io5";


const Drawer = ({children, title , isOpen , onClose}) => {
  return (
  <>
    <div
      className={`top-0 right-0 z-10 absolute  ${
        isOpen ? 'bg-white  ' : ''
      } w-100 min-h-svh h-auto pb-5 `}
    >

       <div className={`flex flex-col w-full h-full  ${isOpen ? "opacity-100" : "opacity-0 invisible "}`}>
        <div className={`flex justify-between items-center px-3 border-gray-300 border-b h-14 `} >
          <span className="font-bold text-sm">{title}</span>
           <span onClick={onClose}><IoClose/></span>
        </div>
        <div className='' >{children}</div>
    </div>
   
       

        
    </div>

  </>
  )
}

export default Drawer
