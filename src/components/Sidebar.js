import React from 'react'
import '../styles/Sidebar.css'
import { Avatar, IconButton } from '@mui/material' 
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import SidebarChat from './SidebarChat'

function Sidebar() {
  return (
    <div className='sidebar'>

      <div className='sidebar__header'>
        <Avatar />

        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLarge style={{ fontSize: 'large' }} />
          </IconButton>
          
          <IconButton>
            <Chat style={{ fontSize: 'large' }} />
          </IconButton>

          <IconButton>
            <MoreVert style={{ fontSize: 'large' }} />
          </IconButton>
        </div>

      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined style={{ fontSize: 'large' }} />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar__chat'>
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>

    </div>
  )
}

export default Sidebar