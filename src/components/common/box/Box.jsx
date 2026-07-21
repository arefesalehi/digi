

const Box = ({title, desc , img}) => {
  return (
    <div className='flex gap-2'>
        <span className='w-10 h-10'><img src={img} alt="" className="rounded"/></span>
        <span className='flex flex-col'>
          <h1 className="font-bold text-sm">{title}</h1>
          <p className="text-xs">{desc}</p>
        </span>

    </div>
  )
}

export default Box