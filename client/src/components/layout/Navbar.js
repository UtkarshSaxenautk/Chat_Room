import React from 'react'

const Navbar = () => {
  return (
  <div>
    <nav className="green">
    <div class="nav-wrapper">
      <a href="/" className="brand-logo">Chat-Room</a>
      <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
  <li><a href="#">Login</a></li>
  <li><a href="#">Signup</a></li>
  <li><a href="#">Logout</a></li>
  </ul>
  </div>
        
  )
}

export default Navbar