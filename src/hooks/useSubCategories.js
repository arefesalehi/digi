import { useEffect, useState } from "react"
import { getAllSubCategories } from "../service/categories.service";



const useSubCategories = () => {
         
    const [subCategories, setSubCategories]=useState([])
    const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState("");

   const fetchData = async () => {
     try {
       const res = await getAllSubCategories ();
 
       setSubCategories(res?.data?.categories || []);
     } catch (err) {
        console.log(err);
        
       setError("خطا در دریافت دسته‌بندی‌ها");
     } finally {
       setIsLoading(false);
     }
   };
 
   useEffect(() => {
     // eslint-disable-next-line react-hooks/set-state-in-effect
     fetchData();
   }, []);
 
   return { subCategories, isLoading, refetch: fetchData, error };
}

export default useSubCategories