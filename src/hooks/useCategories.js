import { useEffect, useState } from "react"
import { getAllCategories } from "../service/categories.service";


const useCategories = () => {
         
    const [allCategories, setAllCategories]=useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        let mounted = true;
        const fetchData = async()=>{
            try {
                setIsLoading(true)
                const res = await getAllCategories()
                console.log('res category=>', res.data.categories);
                mounted &&  setAllCategories(res.data.categories)
                
            } catch (error) {
                mounted && console.log(error);
                
            }finally{
                  mounted &&  setIsLoading(false)
            }

        }
        fetchData()

      return () => {
      mounted = false;
    };  
     
    },[])

    


    return {allCategories, isLoading}
}

export default useCategories