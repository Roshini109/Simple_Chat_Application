import React from 'react'
import {
  AttachFile,
  AddPhotoAlternate
} from '@mui/icons-material'

export default function Input() {
  return (
    <div className="input">
      <input type="text" placeholder='Type something..' />
      <div className="send">
        <input type="file" style={{display:'none'}} id='file' />
        {/* <label htmlFor="file"> */}
          <AddPhotoAlternate className='icon'/>
        {/* </label> */}
        <AttachFile className='icon'/>
        <button>Send</button>
      </div>
    </div>
  )
}
