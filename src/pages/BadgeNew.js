import React from 'react'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                < Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                            firstName="Gabriel"
                            lastName="Quevedo"
                            jobTitle="Frontend Developer"
                            twitter="gabofunk"
                            avatarUrl="http://www.gravatar.com/avatar?d=identicon" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew