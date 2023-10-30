import React from 'react'
import Navbar from '../components/Navbar'
import AppsDropdown from '../components/AppsDropdown'
import Charts from '../Charts'
import Revenue from '../Revenue'
import Transaction from '../components/Transaction'

const AppHome = () => {
  return (
    <div>
     <Navbar/>
     <div className=" mt-20 px-28 " style={{ height: 'calc(100vh - 100px)' }}>
        <div className="flex justify-between h-auto">
            <Charts/>
            <Revenue/>
              </div>
              <Transaction/>

     </div>

    </div>
  )
}

export default AppHome