import React from 'react'
import ItemForm from '../components/ItemForm'
import Items from '../components/Items'


class ItemsContainer extends React.Component {

    render() {
        return(
        <div>
            {/* telling item form what market it has */}
            <ItemForm market={this.props.market}/>
            <Items items={this.props.market && this.props.market.items}/>
            {/* if this.props.market exists then send items */}
        </div>
        )
    }
}

export default ItemsContainer