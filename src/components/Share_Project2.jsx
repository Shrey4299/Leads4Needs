import React from 'react'

import { AiOutlineLink } from "react-icons/ai";
import { BiLinkAlt, BiSearchAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { GoSettings } from 'react-icons/go';
import { ImEmbed } from "react-icons/im";
import { MdOutlineContentCopy } from "react-icons/md";


function Share_Project2() {
  return (
    <div className="h-full w-full p-40 font-semibold  bg-[#F3F2EF] flex flex-col gap-36  justify-between font-Smooch  items-center  ">
    <div className=" text-black bg-white w-[450px]    px-5 py-6  m-auto rounded-3xl  items-center justify-center   shadow-2xl ">
      {/* first section  */}
      <div className="flex gap-5 mb-5">
        <div>
          <h1 className="text-xl mb-2 font-bold">Share  project</h1>
         
        </div>
      
      </div>

      <div className='bg-[#F6F6F6] rounded-lg p-3 '>
      <div className="flex justify-between items-center mb-2 ">
        <div className="flex items-center gap-2 ">
          <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-md items-center font-bold gap-2 flex "> Olivia Rhye <p className='text-sm font-medium'>is asking to edit</p></h1>
            <p className="text-xs text-gray-500">@olivia</p>
          </div>
        </div>
        <div className=' flex gap-2' >
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg font-bold text-red-500  border-[1px] " >
          Deny 
        </button>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg font-bold text-blue-500  border-[1px] " >
          Approve  
        </button>
        </div>
      </div>
      </div>

      {/* second section  */}

      <h2 className="font-bold mb-1  text-sm">Project link</h2>
      <div className="flex gap-2 justify-between mb-5">
      <div className="border-gray-300 w-max  gap-6 text-sm  border-[1px] flex items-center justify-between rounded-lg p-1">
        <input type="text" placeholder="Type your link" />

        <div className="flex gap-2 ">
        <button className="flex items-center w-max  gap-2 text-sm p-1 rounded-lg   ">
          Can view <BsChevronDown />
        </button>
     
        </div>
      </div>
      <button  className="flex items-center  text-white bg-blue-700 text-xs w-max border-gray-300 gap-2  p-2 rounded-lg  border-[1px] ">Send invites</button>
      </div>
      


      {/* third section  */}
    

      {/* profile section  */}
      <div className="flex justify-between items-center mb-2 ">
        <div className="flex items-center gap-2 ">
          <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-sm"> Olivia Rhye</h1>
            <p className="text-xs text-gray-500">@olivia</p>
          </div>
        </div>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg   " >
          Owner <BsChevronDown />
        </button>
      </div>
      <div className="flex justify-between items-center mb-2 ">
        <div className="flex items-center gap-2 ">
          <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-sm"> Olivia Rhye</h1>
            <p className="text-xs text-gray-500">@olivia</p>
          </div>
        </div>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg   " >
          no access <BsChevronDown />
        </button>
      </div>
      <div className="flex justify-between items-center mb-2 ">
        <div className="flex items-center gap-2 ">
          <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-sm"> Olivia Rhye</h1>
            <p className="text-xs text-gray-500">@olivia</p>
          </div>
        </div>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg   " >
          Can edit <BsChevronDown />
        </button>
      </div>
      <div className="flex justify-between items-center mb-2 ">
        <div className="flex items-center gap-2 ">
          <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-sm"> Olivia Rhye</h1>
            <p className="text-xs text-gray-500">@olivia</p>
          </div>
        </div>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg   " >
          can view <BsChevronDown />
        </button>
      </div>

      {/* fourth section  */}

<div className="flex items-center justify-between pt-2 border-t-[1px] border-gray-300">
  <div className="flex gap-5">

<button className="flex gap-2  items-center  p-1 rounded-lg
           text-blue-900 font-semibold">
            {" "}
        <BiLinkAlt/>
            Copy link{" "}
          </button>
<button className="flex  gap-2  items-center   p-1 rounded-lg
           text-blue-900 font-semibold">
            {" "}
            <ImEmbed />
            Get Embed code{" "}
          </button>
  </div>
  <GoSettings/>
</div>

    </div>
  </div>
  )
}

export default Share_Project2