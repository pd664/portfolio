import React from 'react'
import '../../static/comps/header/header.css'

function Header() {
  return (
    <div className='header  fixed-top'>
        <nav className="navbar container navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Prateek Dixit</a>

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="line"></span> 
                    <span className="line"></span> 
                    <span className="line"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonial">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        
                        
                    </ul>
                    <div className='header_contact'>
                        <a href="#contact"><button className='contact_me'>Contact me</button></a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header