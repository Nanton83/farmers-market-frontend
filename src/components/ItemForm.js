import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions/addItem'

//class component - extends react.component
// connect will dispatch action to reducer when create item is called 

class ItemForm extends React.Component {

// Values and Names stored in local state or redux store will make this a controlled form 

state = {
    name: '',
    description: '',
    price: '',
    amount_available: '',
    unit: ''
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
        // evaluating value of event.target.name before setting it as key
        // setState enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state
    })
}

handleSubmit = (event) => { // ABCDE   // ACBD
    event.preventDefault()
    console.log('A')
    this.props.addItem(this.state, this.props.market.id)
    console.log('B');        // submit button sends state
    this.setState({
        name: '',
        description: '',
        price: '',
        amount_available: '',
        unit: ''
    })
    // sending accountId to make post request
}
    render() {
        return (
            <div class="text-center">
                <h5>Add New Item Here</h5>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Name:</label> */}
                    <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange}/><br/>
                    {/* <label>Description:</label> */}
                    <input type='text' placeholder='Description' name='description' value={this.state.description} onChange={this.handleChange}/><br/>
                    {/* <label>Price:</label> */}
                    <input type='text' placeholder='Price' name='price' value={this.state.price} onChange={this.handleChange}/><br/>
                    {/* <label>Amount Available:</label> */}
                    <input type='text' placeholder='Amount Available' name='amount_available' value={this.state.amount_available} onChange={this.handleChange}/><br/>
                    {/* <label>Unit:</label> */}
                    <input type='text' placeholder='Unit' name='unit' value={this.state.unit} onChange={this.handleChange}/><br/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addItem})(ItemForm)

// The connect() function connects a React component to a Redux store.

// It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

// It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

// connect accepts four different parameters, all optional. By convention, they are called:

// mapStateToProps?: Function
// mapDispatchToProps?: Function | Object
// mergeProps?: Function
// options?: Object