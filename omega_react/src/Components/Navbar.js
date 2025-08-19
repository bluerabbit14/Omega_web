import React,{useState} from 'react'

export default function Navbar(props) {

  return (
    <>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#212529", color:"#ffffff"}}>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Title */}
            <a className="navbar-brand" href="/" style={{color:"#ffffff"}}>{props.title}</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{color:"#ffffff"}}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{color:"#ffffff"}}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{color:"#ffffff"}}>Services</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
