import React from 'react'
import './styles/Badges.css'
import confLogo from '../images/platziconf-logo.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import { Link } from 'react-router-dom'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'
import api from '../api'

class Badges extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }
    componentDidMount(){
        this.fetchData()

        this.intervalId = setInterval(this.fetchData,5000)
    }
    fetchData = async ()=>{
        this.setState({
            loading: true,
            error: null,})
        try {
            const data = await api.badges.list()
            this.setState({
                loading: false,
                data: data
            })
        }catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {

    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){
        if(this.state.loading === true && !this.state.data){
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Bades__container">
                            <img className="Badges_conf-logo" src={confLogo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                    {this.state.loading && <MiniLoader/>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges