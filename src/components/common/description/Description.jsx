

const Description = ({title, desc}) => {
  return (
      <div>
        {' '}
        <h1 className="inline-block gap-2 mt-10 pr-4 border-r-8 border-r-red-600 border-solid rounded font-bold text-2xl">
         {title}
        </h1>
        <p className="mt-5">
        {desc}
        </p>
      </div>
  )
}

export default Description