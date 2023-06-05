import React from 'react'
import { useState } from "react";
import {ChipIcon, SupportIcon ,ArchiveIcon, CollectionIcon, DotsHorizontalIcon ,SearchIcon, } from '@heroicons/react/outline';
import { MdDashboard , MdOutlineShoppingBag , MdMailOutline ,MdOutlineOutlinedFlag,MdOutlinePermContactCalendar, MdOutlineContacts, MdOutlineDoorbell, MdOutlineChat, MdOutlineSettings} from "react-icons/md";
import {FcOrgUnit} from "react-icons/fc";
import Settings from './Settings';
import Dashboard from './Dashboard';
import OrdersDetail from './OrdersDetail';
import Job_detail from './Job_detail';
import Audience from './Audience';



function Sidebar() {

  const [open, setOpen] = useState(true);
  const [color, setColor] = useState(true);


 

  return (
    <div className="flex text-black ">
      
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#FFFFFF] h-screen p-7  pt-8 rounded-tr-3xl relative duration-300`}
      >
        <div className="mb-5 flex ">
        <FcOrgUnit  className={`cursor-pointer h-10 w-10  duration-500
             ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />
      </div>
       
        <div className="flex justify-between items-center mb-5 ">

          <div className="flex items-center ">
          <CollectionIcon
            className={`cursor-pointer font-sm text-gray-500 w-7 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />


          <h1
            className={`text-black mx-2 origin-left font-bold text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Leads4Needs
          </h1>
          </div>
          <div>

          </div>

          <div>

            
          </div>
          
        <div className="w-7 text-gray-500 float-right">
<SearchIcon/>
        </div>
       
        </div>
        
        <div className="justify-between hidden md:flex ">
          <button className= {` text-xs  px-7 py-3 tracking-widest border-gray-500 border-2 rounded-2xl ${color ? "bg-indigo-700 text-white" : "transparent " }   ${
              !open && "scale-0"
            } `} onClick={()=>setColor(!color) }>
<h2>
  
PERSONAL
  </h2> 

          </button>

          <button className= {` text-xs  px-7 py-3 tracking-widest border-gray-500 border-2 rounded-2xl ${color ? "transparent " : "bg-indigo-700 text-white" }  ${
              !open && "scale-0"
            } `} onClick={()=>setColor(!color) }>
          BUSINESS
        </button>
          
        </div>

        <div className="py-5  ">
       <div className="border-b-2  border-gray-200">

        <ul>

        <li className="flex">
          
           <MdDashboard  className={`text-black origin-left w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/> 
           
           <h2  className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}>Dashboard</h2></li>
        <li> <MdOutlineShoppingBag className={`text-black origin-left  w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/> <h2  className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}>Products</h2></li>
        <li><MdMailOutline className={`text-black origin-left w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/><h2  className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}>Mail</h2></li>
        <li><MdOutlineOutlinedFlag className={`text-black origin-left w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/><h2  className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}>Campaigns</h2></li>
        <li><MdOutlinePermContactCalendar className={`text-black origin-left w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/> <h2 className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}> Calendar</h2></li>
        <li><MdOutlineContacts className={`text-black origin-left w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/> <h2 className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}>Contacts </h2></li>


        </ul>
       </div>
       <div className="my-4">
<ul>

<h2 className={`text-gray-500 text-sm mb-3 ${
              !open && "scale-0"
            }`}>ACCOUNT</h2>
  <li><MdOutlineDoorbell className={`text-black origin-left w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/> <h2 className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}> Notification</h2> </li>
  <li><MdOutlineChat className={`text-black origin-left w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/> <h2 className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}> Chat</h2></li>
  <li><MdOutlineSettings className={`text-black origin-left w-7 h-7 duration-1000  ${
              !open && "absolute rotate-360"
            }`}/><h2 className={`text-black mx-2 origin-left font-small text-sm duration-200 ${
              !open && "scale-0"
            }`}>Settings</h2></li>
</ul>
       </div>
        </div>
        <div></div>


      </div>
      {/* <div className="h-screen bg-zinc-300 flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
      {/* <Settings color={color}/> */}
      {/* <Dashboard/> */}
      <OrdersDetail/>
      
      
      {/* <Job_detail/> */}

{/* <Audience/> */}

    </div>
  );
}

export default Sidebar