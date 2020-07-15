import React from 'react'
import { Link } from 'react-router-dom'

class BadgesList extends React.Component{
   render(){
       if(this.props.badges.lenght===0){
           return(
               <div>
                   <h3>No se encontró Nara</h3>
               <Link className="btn btn-primary" to="/badges/new">
                   Create NewBadge
               </Link>
               </div>
           )
       }
       return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return(
                        <li key={badge.id}>
                            {badge.firstName} {badge.lastName}
                        </li>
                    )
                })}
            </ul>
       )
   } 
}

export default BadgesList