import { useContext,createContext,useState } from "react";


const AppContext = createContext()

const AppProvider =({children}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());  
    const [transactionType, setTransactionType] = useState('');
    const [transactionStatus, setTransactionStatus] = useState([]);
    const[transactionTypeArray, setTransactionTypeArray] = useState([])

  return(
    <AppContext.Provider value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        transactionStatus,
        setTransactionStatus,
        transactionType,
        setTransactionType,
       transactionTypeArray, 
       setTransactionTypeArray

    }}>{children}</AppContext.Provider>
  )

}
 
export default AppProvider

export const useAppContext = () =>{
    const context = useContext(AppContext)
    return context;
}