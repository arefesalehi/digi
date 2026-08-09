

const DrawerInput = ({label , placeholder , type, className}) => {
  return (
    <div className={`flex flex-col px-8 ${className}`}>
        <label for="" className="my-3 text-xs">{label}:</label>
        <input className="border border-gray-300 rounded h-9 text-xs" type={type} placeholder={placeholder} />
        
    </div>
  )
}

export default DrawerInput