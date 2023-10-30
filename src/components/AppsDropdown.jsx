import React from 'react'
import appbarList from '../assets/app-bar-list.png'
import productIcon from '../assets/Product Icons.png'
import productIcon2 from '../assets/ProductIcon.png'
import productIcon1 from '../assets/ProductIcons.png'

const AppsDropdown = () => {
  return (
    <div className="absolute top-27 left-[58%] w-[340px] bg-white border border-gray-300 shadow-md rounded-md p-2 "> 
           <ul className="py-2">
            <li className="px-4 py-2 hover:shadow cursor-pointer rounded-md"> 
                <div className="p-2 cursor-pointer flex gap-2">
                    <div>
                    <img src={appbarList} alt="product-icon" />
                    </div>
                    <div  className="flex flex-col gap-1">
                        <p className="text-neutral-900 text-base font-[degularmedium]">Link in Bio</p>
                        <p className="text-gray-600 text-sm font-[degularmedium]">Manage your Link in Bio</p>
                    </div>
                </div>
            </li>
            <li className="px-4 py-2 hover:shadow cursor-pointer rounded-md">
          <div className="p-2 cursor-pointer flex gap-2">
            <div>
           <img src={productIcon} alt="product-icon" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-base font-[degularmedium]">Store </p>
              <p className="text-gray-600 text-sm font-[degularmedium]">Manage store activities</p>
            </div>
          </div>
        </li>
            <li className="px-4 py-2 hover:shadow cursor-pointer rounded-md">
          <div className="p-2 cursor-pointer flex gap-2">
            <div>
           <img src={productIcon1} alt="product-icon" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-base font-[degularmedium]">Media Kit </p>
              <p className="text-gray-600 text-sm font-[degularmedium]">Manage your Meadia kit</p>
            </div>
          </div>
        </li>
            <li className="px-4 py-2 hover:shadow cursor-pointer rounded-md">
          <div className="p-2 cursor-pointer flex gap-2">
            <div>
           <img src={productIcon2} alt="product-icon" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-base font-[degularmedium]">Invoicing </p>
              <p className="text-gray-600 text-sm font-[degularmedium]">Manage your Invoicing</p>
            </div>
          </div>
        </li>
           </ul>

        </div>
  )
}

export default AppsDropdown