import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoIosClose } from "react-icons/io";
import { useAppContext } from "../context/AppContext";
import expand from "../assets/expand_more.svg";
import ModalDropdown from "./ModalDropdown";
import TransactionStatus from "./TransactionStatus";
import useRevenueData from "../hooks/useRevenueData";

const Modal = ({ onClose, isOpen }) => {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [transactionTypeClicked, setTransactionTypeClicked] = useState(false);
  const [transactionStatusClicked, setTransactionStatusClicked] = useState(false);
  const [transactionTypeList, setTransactionList] = useState([
    "Store Transactions",
    "Get Tipped",
    "Withdrawals",
    "Chargebacks",
    "Cashbacks",
    "Refer & Earn",
  ]);
  const [hasDropdownSelection, setHasDropdownSelection] = useState(false);
  

  const [transactionStatusList, setTransactionStatusList] = useState([
    "Successful",
    "Pending",
    "Failed",
  ]);
  const { data, loading, applyFilter } = useRevenueData("/transactions");
  const handleTransactionTypeClick = () => {
    setTransactionTypeClicked(!transactionTypeClicked);
    setTransactionStatusClicked(false);
    setHasDropdownSelection(true); 
  };
  const handleTransactionStatusClick = () => {
    setTransactionStatusClicked(!transactionStatusClicked);
    setTransactionTypeClicked(false);
    setHasDropdownSelection(true); 
  };

  if (!isOpen) return null;
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setTransactionTypeArray,
  } = useAppContext();

  const textTransFormPipe = (item, length) => {
    return item.length > length ? item.substring(0, length) + "..." : item;
  };
  console.log(startDate, endDate);
  return (
    <div className=" fixed top-2 right-2 shadow-2xl rounded-3xl overflow-auto flex  justify-center items-center w-[360px] z-50 bg-white bg-opacity-30">
      <div className="bg-white p-4 rounded-[10px] shadow-lg w-[100%]">
        <div className="flex justify-between">
          <h2 className="text-[16px] font-bold mb-4">Filter </h2>
          <IoIosClose onClick={onClose} />
        </div>

        <div>
          <div className="flex gap-2 mb-4">
            <div className="border rounded-[100px] h-7 px-2 flex items-center justify-center text-[10px] font-bold">
              Today
            </div>
            <div className="border rounded-[100px] h-7 px-2 flex items-center justify-center text-[10px] font-bold">
              Last 7 days
            </div>
            <div className="border rounded-[100px] h-7 px-2 flex items-center justify-center text-[10px] font-bold">
              This month
            </div>
            <div className="border rounded-[100px] h-7 px-4 flex items-center justify-center text-[10px] font-bold">
              Last3months
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-[10px] font-bold">Date Range</p>
            <div className="flex gap-2 ">
              <div
                onClick={() => {
                  setStartDateOpen(!startDateOpen);
                  setEndDateOpen(false);
                }}
                className="bg-gray-100 flex px-3 justify-between rounded-[8px] p-2 text-[8px] items-center cursor-pointer"
              >
                {startDate.toISOString()}
                <span>
                  <img src={expand} alt="" />
                </span>
              </div>
              <div
                onClick={() => {
                  setEndDateOpen(!endDateOpen);
                  setStartDateOpen(false);
                }}
                className="bg-gray-100 flex px-3 justify-between rounded-[8px] p-2 text-[8px] items-center cursor-pointer"
              >
                {endDate.toISOString()}{" "}
                <span>
                  <img src={expand} alt="" />
                </span>
              </div>
            </div>
          </div>
          {startDateOpen && (
            <Calendar
              onChange={(date) => setStartDate(date)}
              value={startDate ? new Date(startDate) : null}
              className="absolute top-[165px] right-4 bg-white shadow-md p-4 w-[330px] rounded-[15px] border-0"
            />
          )}
          {endDateOpen && (
            <Calendar
              onChange={(date) => setEndDate(date)}
              value={endDate ? new Date(endDate) : null}
              className="absolute top-[165px] right-4 bg-white shadow-md p-4 w-[330px] rounded-[15px] border-0"
            />
          )}
          <div className="flex flex-col gap-2 mb-4">
            <p className="flex text-[10px] font-bold"> Transaction Type</p>
            <div
              onClick={handleTransactionTypeClick}
              className="bg-gray-100 flex px-3 justify-between rounded-[8px] py-3 text-[8px] items-center capitalize"
            >
              {textTransFormPipe(
                transactionTypeList.length > 0 &&
                  transactionTypeList.join(", "),
                60
              )}
              <div>
                <img src={expand} alt="expand" />
              </div>
            </div>
          </div>
          {transactionTypeClicked && (
            <ModalDropdown
              transactionTypeList={transactionTypeList}
              setTransactionList={setTransactionList}
            />
          )}
          <div className="flex flex-col gap-2 mb-80">
            <p className="text-[10px] font-bold"> Transaction Status</p>
            <div
              onClick={handleTransactionStatusClick}
              className="bg-gray-100 flex px-3 justify-between rounded-[8px] py-3 text-[8px] items-center"
            >
              {textTransFormPipe(
                transactionStatusList.length > 0 &&
                  transactionStatusList.join(", "),
                60
              )}
              <div>
                <img src={expand} alt="expand" />
              </div>
            </div>

            {transactionStatusClicked && (
              <TransactionStatus
                transactionStatusList={transactionStatusList}
                setTransactionStatus={setTransactionStatusList}
              />
            )}
          </div>
          <div></div>

          <div className="flex gap-2 ">
            <button className="flex items-center w-[180px]  justify-center text-black rounded-full border">
              Clear
            </button>
            <button
            className={`flex items-center w-[180px] justify-center  py-2 rounded-full ${
              hasDropdownSelection ? "bg-[#131316] text-white" : "bg-[#EFF1F6]"
            }`}
          >
            Apply
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
