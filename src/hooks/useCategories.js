import { useEffect, useState } from "react"
import { getAllCategories } from "../service/categories.service";


const useCategories = () => {
         
    const [allCategories, setAllCategories]=useState([])
    const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState("");

   const fetchData = async () => {
     try {
       const res = await getAllCategories();
 
       setAllCategories(res?.data?.categories || []);
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
 
   return { allCategories, isLoading, refetch: fetchData, error };
}

export default useCategories