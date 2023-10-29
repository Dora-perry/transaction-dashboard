import React, { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import download from './assets/download.svg';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="">
      <Button
        label="Filter"
        icon={download}
        onClick={handleButtonClick}
        className="border w-[80px] h-[5px] rounded-[100px]"
      />

      {modalVisible && <Modal handleClose={handleCloseModal} />}
    </div>
  );
}

export default App;


 {/* <Navbar/> */}
    {/* <Charts/> */}
    {/* <Revenue/> */}
    {/* <FilterModal/> */}