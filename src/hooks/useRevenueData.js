import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useRevenueData = (endpoint) =>{
    const[data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        const fetchData = async()=>{
            setLoading(true)
         try {
            const response =   await apiClient.get(endpoint);
            setData(response.data);

         } catch (error) {
            console.log("error fetching data", error);
         } finally{
            setLoading(false)
         }

        }
        fetchData()
    }, [])
    return  {data, loading}



}

export default useRevenueData

