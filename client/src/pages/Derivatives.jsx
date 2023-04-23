import React from 'react'
import SideBar from '../components/SideBar'
import PagesHeader from '../components/PagesHeader'
const Derivatives = () => {
  return (
    <div className="bg-slate-900 h-screen w-screen">
      <SideBar page={'/derivatives'}/>
      <div className="ml-20 flex flex-col">
        <PagesHeader title={"Derivatives"} />
      </div>
    </div>
  )
}

export default Derivatives