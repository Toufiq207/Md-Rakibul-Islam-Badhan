import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navber from '../component/Navber'

const Rootpage = () => {
  return (
    <div>
        {/* <Navber/> */}
        <Outlet/>
    </div>
  )
}

export default Rootpage