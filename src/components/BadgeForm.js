import React from 'react'

class BadgeForm extends React.Component{
    handleChange = (e)=>{
        console.log({
            name: e.target.name,
            value: e.target.value})
    }
    handleClick = ()=>{
        console.log('Click')
    }
    handleSubmit = e =>{
        e.preventDefault()
        console.log('Form was submited')
    }
    render() {
        return(
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" name="firstName" type="text"/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm