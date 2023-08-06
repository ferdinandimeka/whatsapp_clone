import React, {useState, useEffect} from 'react'
import '../styles/Chat.css'
import { Avatar, IconButton, } from '@mui/material'
import { SearchOutlined, MoreVert, AttachFile, InsertEmoticon, Mic } from '@mui/icons-material'

function Chat() {

  const [input, setInput] = useState('')
  const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (event) => {
      event.preventDefault();
      console.log('You typed >>> ', input)
      setInput('')
    }

  return (
    <div className='chat'>
        <div className='chat__header'>
          <Avatar 
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          />
              <div className='chat__headerinfo'>
                  <h5>Room name</h5>
                  <p>Last seen at ...</p>
              </div>

          <div className='chat__headerRight'>
            <IconButton>
              <SearchOutlined style={{ fontSize: 'large' }} />
            </IconButton>

            <IconButton>
              <AttachFile style={{ fontSize: 'large' }} />
            </IconButton>

            <IconButton>
              <MoreVert style={{ fontSize: 'large' }} />
            </IconButton>
          </div>

        </div>

        <div className='chat__body'>
          <p className={`chat__message ${true && 'chat__receiver'}`}>
            <span className='chat__name'>Ferdinand</span>
            Hey guy
            <span className='chat__timestamp'>4:30pm</span>
          </p>
        </div>
        <div className='chat__footer'>
          <InsertEmoticon />
          <form >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder=' Type some text...' 
              type='text'
            />
            <button
              type='submit'
              onClick={sendMessage}
            >
              send a message
            </button>
          </form>
          <Mic />
        </div>
    </div>
  )
}

export default Chat