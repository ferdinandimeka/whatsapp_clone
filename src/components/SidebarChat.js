import React, { useState, useEffect } from 'react'
import { Avatar } from '@mui/material'
import '../styles/SidebarChart.css'

function SidebarChat({ addNewChat }) {

    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {}

  return !addNewChat ? (
    <div className='sidebarChat'>
        <Avatar 
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <div className='sidebarChat__info'>
            <h4>Room name</h4>
            <p>Last message...</p>
        </div>
    </div>
  ) : (
    <div
        onClick={createChat}  
        className='sidebarChat'
    >
        <h4>Add New Chat</h4>
    </div>
  )
}

export default SidebarChat