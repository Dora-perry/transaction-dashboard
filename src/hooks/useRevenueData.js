import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { useAppContext } from "../context/AppContext";

const useRevenueData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]); // Initialize filteredData state

  const {
    transactionTypeArray,
    startDate,
    endDate,
    transactionStatus,
  } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(endpoint);
        setData(response.data); // Load all data initially
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  const applyFilter = () => {
    // Filter the data based on the selected criteria
    const filteredData = data.filter((item) => {
      const isDateInRange =
        item.date >= startDate && item.date <= endDate;
      const isTransactionTypeValid =
        transactionTypeArray.includes(item.transactionType);
      const isTransactionStatusValid =
        transactionStatus.includes(item.transactionStatus);
      return isDateInRange && isTransactionTypeValid && isTransactionStatusValid;
    });
    setFilteredData(filteredData);
  };

  return { data, loading, applyFilter, filteredData };
};

export default useRevenueData;




























// import { useEffect, useState } from "react"
// import apiClient from "../services/apiClient";
// import { useAppContext } from "../context/AppContext";

// const useRevenueData = (endpoint) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filterData, setFilterData] = useState();

//   const {
//     transactionTypeArray,
//     startDate,
//     setStartDate,
//     endDate,
//     setEndDate,
//     transactionStatus,
//     setTransactionStatus,
//   } = useAppContext();

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await apiClient.get(endpoint);
//         setData(response.data);
//       } catch (error) {
//         console.log("error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
//   return { data, loading };
// };

// export default useRevenueData;
