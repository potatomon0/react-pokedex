import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className="pageOptions">
      <Link to="/">
      <div>Main</div>
      </Link>
      <Link to="/List">
      <div>List</div>
      </Link>
      <Link to="/PkmInfo">
      <div>PkmInfo</div>
      </Link>
    </div>
  )
}

export default Menu