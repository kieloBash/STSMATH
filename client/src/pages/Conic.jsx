import React from 'react'
import SideBar from '../components/SideBar'
import PagesHeader from '../components/PagesHeader'

const Conic = () => {
  return (
    <div className="bg-slate-900 h-screen w-screen">
      <SideBar page={'/conic'}/>
      <div className="ml-20 flex flex-col">
        <PagesHeader title={"Conic Section"} />
      </div>
    </div>
  )
}

export default Conic