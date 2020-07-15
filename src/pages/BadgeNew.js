import React from 'react'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import './styles/BadgeNew.css'
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component{
    state = {
        loading: false,
        error: null,

        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    }
    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    handleSubmit = async e =>{
        e.preventDefault()
        this.setState({
            loading: true,
            error: null
        })
        try{
            await api.badges.create(this.state.form)
            this.setState({
                loading: false
            })

            this.props.history.push('/badges')
        }catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid BadgeNew__hero-image" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName={this.state.form.firstName || 'firstName'}
                            lastName={this.state.form.lastName || 'lastName'}
                            jobTitle={this.state.form.jobTitle || 'jobTitle'}
                            twitter={this.state.form.twitter || 'twitter'}
                            email={this.state.form.email || 'email'}
                            avatarUrl="http://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                            onSubmit={this.handleSubmit}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew