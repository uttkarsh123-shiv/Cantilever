import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <p>News Collector</p>
      <div className="btn-grp">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Navbar
