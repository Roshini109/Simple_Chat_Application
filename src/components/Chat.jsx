import React from 'react'
import {
  Videocam,
  PersonAddAlt1,
  MoreHoriz
} from '@mui/icons-material'
import Messages from './Messages'
import Input from './Input'


export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <Videocam/>
          <PersonAddAlt1/>
          <MoreHoriz/>
        </div>
      </div>

      <Messages/>
      <Input/>
    </div>
  )
}
