import React from 'react'

export default function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="/assets/prof2.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}
