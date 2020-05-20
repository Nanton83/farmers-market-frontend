import React from 'react'
import {connect} from 'react-redux'
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

    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                    <input type='text' placeholder='Name'/><br/>
                    <label>Description:</label>
                    <input type='text' placeholder='Description'/><br/>
                    <label>Price:</label>
                    <input type='text' placeholder='Price'/><br/>
                    <label>Amount Available:</label>
                    <input type='text' placeholder='Amount Available'/><br/>
                    <label>Unit:</label>
                    <input type='text' placeholder='Unit'/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null,)(ItemForm)