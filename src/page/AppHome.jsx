import React from 'react'
import Navbar from '../components/Navbar'
import AppsDropdown from '../components/AppsDropdown'
import Charts from '../Charts'
import Revenue from '../Revenue'

const AppHome = () => {
  return (
    <div>
     <Navbar/>
     <div className="px-20 mt-20 ">
        <div className="flex justify-between">
            <Charts/>
            <Revenue/>
              </div>

     </div>

    </div>
  )
}

export default AppHome