import React from 'react'
import Navbar from '../components/Navbar'
import Charts from '../components/Charts'
import Revenue from '../components/Revenue'
import Transaction from '../components/Transaction'

const AppHome = () => {
  return (
    <div>
     <Navbar/>
     <div className=" mt-20 px-28 ">
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