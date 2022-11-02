import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const Nav = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/home" class="nav-link " >Home</Link>
           </li>
          <li class="nav-item">
            <Link to="/dashboard" class="nav-link " >DashBoard</Link>
          </li>
          <li class="nav-item">
          <Link to="/about" class="nav-link " >About</Link>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Nav
