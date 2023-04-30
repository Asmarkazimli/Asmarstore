import React from 'react'
import './Navbar.css'
import { Outlet } from 'react-router-dom';


function Navbar(props) {
  const { setShowCartPage } = props;
  return (
    <>
      <div>

        <nav>
          <div className='home'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>

            <div role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <a href="/"><li>Home</li></a>
                  <a href="/about"><li>About</li></a>
                  <a href="/contact"><li>Contact</li></a>
                  <i onClick={() => setShowCartPage(true)} className="bii">Cart</i>
                </ul>
              </div>
            </div>

          </div>
          <div className='store'><h1>Asmarstore</h1></div>
          <div className='icons'>
            <i className="bi bi-person-fill"></i>
            <i className="bi bi-heart-fill"></i>
            <i onClick={() => setShowCartPage(true)} className="bi bi-cart-dash-fill"></i>

          </div>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar