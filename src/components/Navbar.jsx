import React, { useState } from "react";
import logo from "../assets/mainstack-logo.svg";
import homeIcon from "../assets/home.svg";
import chartIcon from "../assets/insert_chart.svg";
import groupIcon from "../assets/group.svg";
import widgetIcon from "../assets/widgets.svg";
import notificationIcon from "../assets/notifications.svg";
import chatIcon from "../assets/chat.svg";
import paymentIcon from "../assets/payments.svg";
import { Tooltip } from "react-tooltip";
import appbarList from "../assets/app-bar-list.svg";
import product from "../assets/product.svg";
import media from "../assets/media.svg";
import kit from "../assets/kit.svg";
import AppsDropdown from "./AppsDropdown";
import "./style.css";
import UserInfo from "./UserInfo";
import appBar from "../assets/colored/app-bar.svg";
import Iconsc from "../assets/colored/Pi.svg";
import Pi from "../assets/colored/ProductIconc.svg";
import Prod from "../assets/colored/Prod.svg";
import {BsChevronDown} from 'react-icons/bs'
import {MdWidgets} from 'react-icons/md'

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [appsButtonClicked, setAppsButtonClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredApp, setHoveredApp] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(false);
  const [hoveredMedia, setHoveredMedia] = useState(false);
  const [hoveredKit, setHoveredKit] = useState(false);

  const handleClick = () => {
    setIsDropdown(!isDropdown);
    setAppsButtonClicked(!appsButtonClicked);
    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className="px-4 pt-4">
        <div className="h-[64px] flex justify-between items-center pl-5 bg-[#FFF] border rounded-[100px] p-2 shadow">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex gap-6">
            <li className="flex space-x-1 items-center hover:bg-gray-200 rounded-full p-2 text-gray-600">
              <img src={homeIcon} alt="home" />
              <p className="text-[13px]">Home</p>
            </li>
            <li className="flex space-x-1 items-center hover:bg-gray-200 rounded-full p-2 text-gray-600">
              <img src={chartIcon} alt="home" />
              <p className="text-[13px]">Analytics</p>
            </li>
            <li className="flex space-x-1 items-center bg-[#131316] rounded-full px-3 text-white">
              <img src={paymentIcon} alt="home" />
              <p className="text-[13px]">Revenue</p>
            </li>
            <li className="flex space-x-1 items-center hover:bg-gray-200 rounded-full p-2 text-gray-600">
              <img src={groupIcon} alt="home" />
              <p className="text-[13px]">CRM</p>
            </li>
            <li>
              {/* <div
                className="flex items-center p-2 gap-1 rounded-full cursor-pointer hover:bg-gray-200"
                onClick={handleClick}
              >
                {appsButtonClicked ? (
                  <img src={homeIcon} alt="home" />
                ) : (
                  <img src={widgetIcon} alt="home" />
                )}
                <p
                  className={` text-[13px] ${
                    appsButtonClicked ? "text-[#56616B]" : "text-gray-600"
                  }`}
                >
                  {appsButtonClicked ? "Home" : "Apps"}
                </p>
              </div> */}
                <div
                className={`flex items-center p-2 gap-1 rounded-full cursor-pointer ${appsButtonClicked ? "bg-neutral-900" : "hover:bg-gray-200"}`}
                onClick={handleClick}
              >
                <img src={widgetIcon} alt="apps" className="text-white" />
                {/* <MdWidgets className="text-white"/> */}
                <p className={`text-[13px] ${appsButtonClicked ? "text-white" : "text-gray-600"}`}>
                  Apps {appsButtonClicked ? " |  Link in Bio" : ""}
                </p>
                {appsButtonClicked && <BsChevronDown className="text-white text-[12px] font-bold"/>}
              </div>
              {isDropdown && <AppsDropdown />}
            </li>
          </ul>
          <ul className="flex gap-4 items-center justify-center">
            <li>
              <img src={notificationIcon} alt="notification" />
            </li>
            <li>
              <img src={chatIcon} alt="chat" />
            </li>
            <li>
              <UserInfo
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setIsDropdown={setIsDropdown}
              />
            </li>
          </ul>

          <div className="flex flex-col left-4 fixed top-[39%] items-center shadow rounded-full px-1 pt-2 pb-1">
            <div className="mb-2 h-[35px] w-[35px] rounded-full hover:bg-[#EFF1F6]">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Link in Bio"
                className="text-[8px]"
                onMouseEnter={() => setHoveredApp(true)}
                onMouseLeave={() => setHoveredApp(false)}
              >
                {hoveredApp ? (
                  <img src={appBar} alt="app" />
                ) : (
                  <img src={appbarList} alt="appbar" />
                )}
              </a>
            </div>
            <Tooltip id="my-tooltip" place="right" />

            <div className="mb-3 flex items-center justify-center h-[35px] w-[35px] rounded-full hover:bg-[#EFF1F6]">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="store"
                className="text-[8px]"
                onMouseEnter={() => setHoveredProduct(true)}
                onMouseLeave={() => setHoveredProduct(false)}
              >
                {hoveredProduct ? (
                  <img src={Pi} alt="app" />
                ) : (
                  <img src={product} alt="store" />
                )}
              </a>
            </div>
            <Tooltip id="my-tooltip" place="right" />

            <div className="mb-3 flex items-center justify-center h-[35px] w-[35px] rounded-full hover:bg-[#EFF1F6]">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Media Kit"
                className="text-[8px]"
                onMouseEnter={() => setHoveredMedia(true)}
                onMouseLeave={() => setHoveredMedia(false)}
              >
                {hoveredMedia ? (
                  <img src={Prod} alt="app" />
                ) : (
                  <img src={media} alt="media" />
                )}
              </a>
            </div>
            <Tooltip id="my-tooltip" place="right" />
            <div className="mb-3 flex items-center justify-center h-[35px] w-[35px] rounded-full hover:bg-[#EFF1F6]">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Invoicing"
                className="text-[8px]"
                onMouseEnter={() => setHoveredKit(true)}
                onMouseLeave={() => setHoveredKit(false)}
              >
                {hoveredKit ? (
                  <img src={Iconsc} alt="app" />
                ) : (
                  <img src={kit} alt="kit" />
                )}
              </a>
            </div>
            <Tooltip id="my-tooltip" place="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
