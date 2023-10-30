import React, { useState } from 'react';

const FilterModal = ({ isOpen, onClose, onFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleFilter = () => {
    // Perform the filtering action and call the `onFilter` function
    // Pass the filter parameters as arguments

    function onFilter(data, startDate, endDate, selectedTypes, selectedStatuses) {
      // Use the filter() method to apply the date range filter
      const filteredData = data.filter(item => {
        const itemDate = new Date(item.transactionDate); // Assuming the data includes a 'transactionDate' field
        return itemDate >= startDate && itemDate <= endDate;
      });
    
      // Use the filter() method to apply the transaction type filter
      if (selectedTypes.length > 0) {
        filteredData = filteredData.filter(item => selectedTypes.includes(item.transactionType));
      }
    
      // Use the filter() method to apply the transaction status filter
      if (selectedStatuses.length > 0) {
        filteredData = filteredData.filter(item => selectedStatuses.includes(item.transactionStatus));
      }
    
      return filteredData;
    }
    onFilter(startDate, endDate, selectedTypes, selectedStatuses);
    onClose();
  };

  return (
    <div className={`filter-modal ${isOpen ? 'open' : ''} fixed right-0 w-400 h-screen bg-white overflow-y-auto transition-right duration-300 z-50`}>
      <div className="modal-content p-20">
        <span className="close-button absolute top-10 right-10 cursor-pointer" onClick={onClose}>X</span>
        <h2>Filter Data</h2>
        <label>Start Date: <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></label>
        <label>End Date: <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} /></label>
        <label>Transaction Types: 
          <select multiple value={selectedTypes} onChange={(e) => setSelectedTypes(Array.from(e.target.selectedOptions, option => option.value))}>
            <option value="Sale">Sale</option>
            <option value="Refund">Refund</option>
            <option value="Transfer">Transfer</option>
            {/* Add more transaction types */}
          </select>
        </label>
        <label>Transaction Statuses: 
          <select multiple value={selectedStatuses} onChange={(e) => setSelectedStatuses(Array.from(e.target.selectedOptions, option => option.value))}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
            {/* Add more transaction statuses */}
          </select>
        </label>
        <button onClick={handleFilter} className="bg-blue-500 text-white p-2 rounded">Apply Filter</button>
      </div>
    </div>
  );
};

export default FilterModal;



// import React, { useState } from 'react';
// import Button from './components/Button';
// import Modal from './components/Modal';
// import download from './assets/download.svg';

// function App() {
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleButtonClick = () => {
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div className="">
//       <Button
//         label="Filter"
//         icon={download}
//         onClick={handleButtonClick}
//         className="border w-[80px] h-[5px] rounded-[100px]"
//       />

//       {modalVisible && <Modal handleClose={handleCloseModal} />}
//     </div>
//   );
// }

// export default App;