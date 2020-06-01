import React from 'react'
import {connect} from 'react-redux'
import {removeItem} from '../actions/removeItem'



const Items = (props) => {

    

   const handleRemoveItem = (item) => {
        
        props.removeItem(item.id, item.market_id)
    }

    
    return (
        <div>
            {/* if props.items is not undefined, it will iterate over items, they are sometimes undefined after a refresh/store refresh */}
            {props.items && props.items.map(item => 
            <li key={item.id}>{item.name} - {item.price} <button onClick={() => handleRemoveItem(item)}>Remove Item</button></li>
            // A “key” is a special string attribute you need to include when creating lists of elements -- Keys help React identify which items have changed, are added, or are removed
            )}
        </div>
       )
    
}

export default connect(null, {removeItem})(Items)