import React from 'react'
import ConfLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'
import api from '../api'
import { Link } from 'react-router-dom'

class BadgeDetails extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData = async ()=>{
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading:false,data:data})
        }
    catch(error){
        this.setState({loading:false,error:error})
    }
}
    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        const badge = this.state.data
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={ConfLogo} alt="Logo de la Conferencia"/>
                            </div>
                            <div className="col-6">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            jobTitle={badge.jobTitle}
                            twitter={badge.twitter}
                                />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <Link className="btn btn-danger" to={`/badge/${badge.id}/edit`}>
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails