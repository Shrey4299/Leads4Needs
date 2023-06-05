import React from "react";
import { AiFillHeart, AiOutlineRight } from "react-icons/ai";

const Settings = () => {
  return (
    <div className="h-full bg-[#262837] flex-1  text-white  font-normal ">
      <div className="flex w-full  ">
        <div className="w-2/5  border-r-2 p-10 p border-gray-700">
          <div className="font-bold text-2xl mb-7">
            <h1>Settings</h1>
          </div>
          <div className="bg-[#4686ee] rounded-3xl  p-5 text-lg ">
            <div className="flex items-center gap-10 ">
            
    
              <div className="">
                <h2 className="font-bold">Profile information</h2>
                <p className="text-slate-300 ">
                  complete your profile to unlock feature
                </p>
              </div>
            </div>

            <div className="w-full text-center mt-5">
              <button className="bg-white text-[#4686ee] rounded-3xl px-14 py-1 text-center">
                Complete my profile
              </button>
            </div>
          </div>


          {/* second section */}

          <div className="mt-10 text-slate-400  text-md">
            <div className="flex gap-3 border-b-2 border-gray-700  py-5">
              <div className="">
                <AiFillHeart className="bg-[#393b43] w-6 h-6 p-1 rounded-lg text-white" />
              </div>
              <div className="w-full">
                <h1>Appereance</h1>
                <p className="text-sm">Dark and light Mode , Font size</p>
              </div>
              <div className="justify-end ">
                <AiOutlineRight className="text-white h-6 justify-end " />
              </div>
            </div>
            <div className="flex gap-3 border-b-2 border-gray-700  py-5">
              <div className="">
                <AiFillHeart className="bg-[#393b43] w-6 h-6 p-1 rounded-lg text-white" />
              </div>
              <div className=" w-full">
                <h1>Account Settings </h1>
                <p className="text-sm">Personal information ,Email</p>
              </div>
              <div className="cn">
                <AiOutlineRight className="text-white h-6 " />
              </div>
            </div>
            <div className="flex gap-3 border-b-2 border-gray-700  py-5">
              <div className="">
                <AiFillHeart className="bg-[#393b43] w-6 h-6 p-1 rounded-lg text-white" />
              </div>
              <div className="w-full">
                <h1>Security</h1>
                <p className="text-sm">Change Password,2FA</p>
              </div>
              <div className="cn">
                <AiOutlineRight className="text-white h-6 " />
              </div>
            </div>
            <div className="flex gap-3 border-b-2 border-gray-700  py-5">
              <div className="">
                <AiFillHeart className="bg-[#393b43] w-6 h-6 p-1 rounded-lg text-white" />
              </div>
              <div className="w-full">
                <h1>Appereance</h1>
                <p className="text-sm">Dark and light Mode , Font size</p>
              </div>
              <div className="cn">
                <AiOutlineRight className="text-white h-6 " />
              </div>
            </div>
            <div className="flex gap-3 border-b-2 border-gray-700  py-5">
              <div className="">
                <AiFillHeart className="bg-[#393b43] w-6 h-6 p-1 rounded-lg text-white" />
              </div>
              <div className="w-full">
                <h1>Account Settings</h1>
                <p className="text-sm">Personal information ,Email</p>
              </div>
              <div className="cn">
                <AiOutlineRight className="text-white h-6 " />
              </div>
            </div>
           
          
          {/* Acccount setting */}

          </div>
        </div>
        <div className="w-3/5 border-r-2 p-10 border-gray-700">
          <div className="font-bold text-2xl mb-7 pb-7 border-b-2 border-gray-700 ">
            <h1>Account Settings</h1>
          </div>
          <div className="">
            <div className="mb-7">
              <h1 className=" text-lg" >Personal Information</h1>
              <p className="text-slate-400 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div className="flex gap-7">
              <div className="w-1/2">
                <h1 className="text-lg mb-2">First name :</h1>
                <input type="text" placeholder="Samantha" className="bg-[#2E303F] text-white w-full rounded-lg p-2 " />
              </div>
              <div className="w-1/2">
                <h1 className="text-lg mb-2">Last name :</h1>
                <input type="text" placeholder="William" className="bg-[#2E303F] text-white w-full rounded-lg p-2 " />
              </div>
            </div>
            <div className="my-4 pb-7 border-b-2 border-gray-700 ">
              <h1 className="text-lg my-2">User Name : </h1>
              <input type="email" placeholder="Sam@email.com" className="bg-[#2E303F] text-white rounded-lg p-2 w-full " />
            </div>

            <div className="">
              <div className="mb-5">
                <h1 className=" text-lg">Notifications</h1>
                <p className="text-slate-400 text-sm">choose type of notification you want to recieve</p>
              </div>


              {/* input section */}

              <div className="grid grid-cols-2  gap-y-4 w-full my-4 pb-7 border-b-2 border-gray-700 ">

                <div className="flex gap-3 items-center">


                <input
                  type="checkbox"
                  id="vehicle1"
                  
                  value="Bike"
                  className="w-5 h-5 bg-gray-700 text-gray-700"
                />
                <label for="vehicle1">job reporting</label>


                </div>
               
                <div className="flex gap-3 items-center">


                <input
                  type="checkbox"
                  id="vehicle1"
                  
                  value="Bike"
                  className="w-5 h-5 bg-gray-700 text-gray-700"
                />
                <label for="vehicle1">job posting report </label>


                </div>
               
                <div className="flex gap-3 items-center">


                <input
                  type="checkbox"
                  id="vehicle1"
                  
                  value="Bike"
                  className="w-5 h-5 bg-gray-700 text-gray-700"
                />
                <label for="vehicle1">page follow notification</label>


                </div>
               
                <div className="flex gap-3 items-center">


                <input
                  type="checkbox"
                  id="vehicle1"
                  
                  value="Bike"
                  className="w-5 h-5 bg-gray-700 text-gray-700"
                />
                <label for="vehicle1">follow notification</label>


                </div>
               
               
               

               
              </div>
            </div>

            <div className="flex gap-7 justify-evenly ">
              <button className= "bg-[#525298] px-10 py-2 rounded-full">Discard Changes</button>
              <button>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
