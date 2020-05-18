import React from 'react'
import {connect} from 'react-redux'
import {addMarket} from '../actions/addMarket'

// wrapped in brackets since they were not exported as default

class MarketForm extends React.Component {

    state = {
        name: '', 
        location: ''
    }

    handleChange = (event) => {
        this.setState({
            // live updating state
            [event.target.name]: event.target.value
            // in brackets to evaluate inside of brackets, then sets as key
        })
    }

    handleSubmit = (event) => {
        // prevents re rendering page
        event.preventDefault()
        // sending state to addMarket
        this.props.addMarket(this.state)
        // submit button sends state
        this.setState({
            name: '', 
            location: ''
        })
        // setState is asynchronous, it will not clear state until function is completed

    }

// Controlled Form
    render() {
        return(
            <div>
                {/* handleSubmit is in form tag to submit entire form */}
                <form onSubmit={this.handleSubmit}>
                    <label>Market Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>Market Location:</label>
                    <input type='text' placeholder='Location' value={this.state.location} name="location" onChange={this.handleChange} /><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addMarket})(MarketForm)
// passing addMarket into connect gives us access to props
// component is creating data to send to backend and update redux store