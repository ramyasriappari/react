import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div>
      <center>
      <h1>Welcome to dashboard page</h1>
      <Link to='/'>Back To Home</Link>
      </center>
    </div>
  )
}

export default DashBoard
