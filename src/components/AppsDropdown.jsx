import React, { useState } from "react";
import appbarList from '../assets/colored/app-bar.svg'
import productIcon from "../assets/colored/Iconsc.svg";
import invoice from '../assets/colored/Pi.svg';
import productIcon2 from "../assets/colored/ProductIconc.svg";
import productIcon1 from "../assets/colored/Prod.svg";
import { PiCaretRightLight } from "react-icons/pi";

const AppsDropdown = () => {
  const [hoveredItems, setHoveredItems] = useState([false, false, false, false]);

  const handleMouseEnter = (index) => {
    const updatedHoveredItems = [...hoveredItems];
    updatedHoveredItems[index] = true;
    setHoveredItems(updatedHoveredItems);
  };

  const handleMouseLeave = (index) => {
    const updatedHoveredItems = [...hoveredItems];
    updatedHoveredItems[index] = false;
    setHoveredItems(updatedHoveredItems);
  };

  return (
    <div className="absolute top-[84px] left-[58%] w-[300px] bg-white border-gray-300 shadow-md rounded-[10px] p-[2px] ">
      <ul className="py-2">
        {[
          { icon: appbarList, title: "Link in Bio", description: "Manage your Link in Bio", class: "app-bar-icon", iconStyle: {} },
          { icon: productIcon2, title: "Store", description: "Manage store activities", class: "other-icon", iconStyle: { width: "43px", height: "43px" } },
          { icon: productIcon1, title: "Media Kit", description: "Manage your Media Kit", class: "other-icon", iconStyle: { width: "43px", height: "43px" } },
          { icon: invoice, title: "Invoicing", description: "Manage your Invoicing", class: "other-icon", iconStyle: { width: "43px", height: "43px" } },
        ].map((item, index) => (
          <li className="py-2 px-1" key={index}>
            <div
              className={`p-2 hover:border flex gap-2 rounded-[10px] relative ${item.class}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="border rounded-[10px] flex items-center justify-center" style={item.iconStyle}>
                <img src={item.icon} alt="product-icon" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-neutral-900 text-[13px] font-medium">{item.title}</p>
                <p className="text-gray-600 text-[10px]">{item.description}</p>
              </div>
              {hoveredItems[index] && (
                <PiCaretRightLight className="absolute top-6 right-3 transform -translate-x-0.5 -translate-y-0.5 text-[8px]" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppsDropdown;
