import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

class BadgesList extends React.Component{
   render(){
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