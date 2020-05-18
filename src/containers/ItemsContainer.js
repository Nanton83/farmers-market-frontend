import React from 'react'
import ItemForm from '../components/ItemForm'
import Items from '../components/Items'
import Market from '../components/Market'

class ItemsContainer extends React.Component {

    render() {
        return(
        <div>
            <ItemForm/>
            <Items items={this.props.market && this.props.market.items}/>
            {/* if this.props.market exists then send items */}
        </div>
        )
    }
}

export default ItemsContainer