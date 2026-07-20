
import AccardionItems from "./fragments/AccardionItems"
import Data from '../../../pages/about-us/Data'

const Accardeon = () => {
  
  return (
    <>


       <div className="border border-gray-300 rounded w-[80%] h-auto">
           {
            Data.map((accardionOption)=>{
                return (
                  <AccardionItems  key={accardionOption.id}  {...accardionOption}/>

                )
            })
           }
          


       </div>
    </>
  )
}

export default Accardeon