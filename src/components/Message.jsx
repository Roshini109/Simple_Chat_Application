import React from 'react'

export default function Message() {
  return (
    <div className="message owner">
       <div className="messageInfo">
          <img src="/assets/prof2.jpg" alt="" />
          <span>just now</span>
       </div>

       <div className="messageContent">
          <p>hello</p>
          <img src="/assets/msg1.jpg" alt="" />
       </div>
    </div>
  )
}
