import React from "react";
import appbarList from "../assets/app-bar-list.svg";
import productIcon from "../assets/Product Icons.svg";
import productIcon2 from "../assets/ProductIcon.svg";
import productIcon1 from "../assets/ProductIcons.svg";
import {PiCaretRightLight}from "react-icons/pi";
import { useState } from "react";

const AppsDropdown = () => {
  const [isHovered, setIsHoverered] = useState(false);

  return (
    <div className="absolute top-[84px] left-[58%] w-[300px] bg-white  border-gray-300 shadow-md rounded-[10px] p-[2px] ">
      <ul className="py-2">
        <li className=" py-2 px-1 ">
          <div
            className="p-2  hover:shadow flex gap-2 rounded-[10px] relative"
            onMouseEnter={() => setIsHoverered(true)}
            onMouseLeave={() => setIsHoverered(false)}
          >
            <div className="border rounded-[10px]">
              <img src={appbarList} alt="product-icon" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-[13px] font-medium ">
                Link in Bio
              </p>
              <p className="text-gray-600 text-[10px] ">
                Manage your Link in Bio
              </p>
            </div>
            {isHovered && (
              <PiCaretRightLight className=" absolute top-6 right-3 transform -translate-x-0.5 -translate-y-0.5 text-[8px]" />
            )}
          </div>
        </li>
        <li className="px-2 py-2 cursor-pointer">
          <div className="p-2 hover:shadow flex gap-2 rounded-[10px]">
            <div className=" border py-2 px-2 rounded-[10px]">
              <img src={productIcon} alt="product-icon" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-[13px] font-medium">Store </p>
              <p className="text-gray-600 text-[10px]">
                Manage store activities
              </p>
            </div>
          </div>
        </li>
        <li className="px-2 py-2">
          <div className="p-2  hover:shadow flex gap-2 rounded-[10px]">
            <div className="border rounded-[10px] py-2 px-2">
              <img src={productIcon1} alt="product-icon" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-[13px] font-medium">
                Media Kit{" "}
              </p>
              <p className="text-gray-600 text-[10px]">
                Manage your Meadia kit
              </p>
            </div>
          </div>
        </li>
        <li className="px-2 py-2">
          <div className="p-2 hover:shadow flex gap-2 rounded-[10px]">
            <div className="border rounded-[10px] py-2 px-2">
              <img src={productIcon2} alt="product-icon" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-[13px] font-medium">
                Invoicing{" "}
              </p>
              <p className="text-gray-600 text-[10px]">Manage your Invoicing</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AppsDropdown;
