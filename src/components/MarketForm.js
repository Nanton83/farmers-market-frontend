import React from 'react'
import {connect} from 'react-redux'
import {addMarket} from '../actions/addMarket'

//class component - extends react.component
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
        this.setState({
            name: '', 
            location: ''
        })
        this.props.history.push('/markets')
        //when form is submitted history.push will direct browser back to /markets
        // setState is asynchronous, it will not clear state until function is completed

    }

// Controlled Form
    render() {
        return(
            <div class="container text-center">
                <p class="h4 mb-4">Create A New Market</p>
                {/* handleSubmit is in form tag to submit entire form */}
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Market Name: </label> */}
                    <input class="form-control" type='text' placeholder='Market Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    {/* <label>Market Location:</label> */}
                    <input class="form-control" type='text' placeholder='Market Location' value={this.state.location} name="location" onChange={this.handleChange} />
                    <input class="btn btn-info my-4 btn-block" type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addMarket})(MarketForm)
// passing addMarket into connect gives us access to props
// component is creating data to send to backend and update redux store