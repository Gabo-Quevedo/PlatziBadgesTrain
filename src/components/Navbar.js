import React from 'react'

import './styles/Navbar.css'
import logo from '../images/logo.svg'


class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar_brand" href="/">
                        <img className="Navbar_brand-logo" src={logo} alt=""/>
                        <span className="font-weight-light">Patzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar