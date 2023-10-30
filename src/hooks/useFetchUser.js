import { useState } from "react";
import apiClient from "../services/apiClient";

const useFetchUser = () => {
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await apiClient.get('/user');
          setUserData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { userData, loading };
  };


  export default useFetchUser;
