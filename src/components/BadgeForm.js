import React from 'react'

class BadgeForm extends React.Component{
    // state = {}
    // handleChange = (e)=>{
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value})
        // this.setState({
        //     [e.target.name]: e.target.value,
        // })
    // }
    handleClick = ()=>{
        console.log('Click')
    }
    // handleSubmit = e =>{
    //     e.preventDefault()
    //     console.log('Form was submited')
    //     console.log(this.props.formValues)
    // }
    render() {
        return(
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            name="firstName"
                            type="text"
                            value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            name="lastName"
                            type="text"
                            value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            name="email"
                            type="text"
                            value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label>JobTitle</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            name="jobTitle"
                            type="text"
                            value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            name="twitter"
                            type="text"
                            value={this.props.formValues.twitter}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
                    {this.props.error && 
                    <p className="text-danger">
                        {this.props.error}
                    </p>}
                </form>
            </div>
        )
    }
}

export default BadgeForm