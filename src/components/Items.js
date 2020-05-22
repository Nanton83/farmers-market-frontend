import React from 'react'
import {connect} from 'react-redux'
import {removeItem} from '../actions/removeItem'



class Items extends React.Component {

    state = {}

    handleRemoveItem = (item) => {
        
        this.props.removeItem(item.id, item.market_id)
    }

    render() {
    return (
        <div>
            {/* if props.items is not undefined, it will iterate over items, they are sometimes undefined after a refresh/store refresh */}
            {this.props.items && this.props.items.map(item => 
            <li key={item.id}>{item.name} - {item.price} <button onClick={() => this.handleRemoveItem(item)}>Remove Item</button></li>    
            )}
        </div>
       )
    }
}

export default connect(null, {removeItem})(Items)