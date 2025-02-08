import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="navbtn" id="navBtn">
          <div className="btnln" id="nav-btn-upr-bar"></div>
          <div className="btnln" id="nav-btn-mdl-bar"></div>
          <div className="btnln" id="nav-btn-lwr-bar"></div>
        </div>

        <div className="image">
          <img src="img/TH.png" alt="TH" />
        </div>

        <div className="header-context-label">Home</div>
        <div className="profile">
          <img src="" alt="G" />
        </div>
      </header>

      <hr />


      <nav id="nav-bar">
        <ul id="nav-ul">
          <li><a className="hoverBtn listItem">Home</a></li>
          <li><a className="hoverBtn listItem">Explore</a></li>
          <li><a className="hoverBtn listItem">Messaging</a></li>
          <li><a className="hoverBtn listItem">Notifications</a></li>
          <li><a className="hoverBtn listItem">Profile</a></li>
        </ul>
        <div id="theme-ch" className="hoverBtn">
          <label>Theme</label>
          <span className="checkmark"></span>
        </div>
      </nav>
      <hr id="desktop-hr" />

      <div className="container">
        <h1>This is home</h1>
      </div>
      </>
      )
}

      export default App
