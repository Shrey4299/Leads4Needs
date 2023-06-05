import React from 'react'
import Center from './Center'
import { Chatbox } from './Chatbox'
import Profile from './Profile'

function Chating_Section() {
  return (
    <div className='flex'>
        <Chatbox/>
        <Center/>
        <Profile/>
    </div>
  )
}

export default Chating_Section
