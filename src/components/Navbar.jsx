import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">RD Chat</span>
      <div className="user">
        <img src="/assets/prof1.jpg" alt="" />
        <span>Rose</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}
