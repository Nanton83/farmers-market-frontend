import React from 'react'

//functional component

const Items = (props) => {
    return (
        <div>
            {/* if props.items is not undefined, it will iterate over items, they are sometimes undefined after a refresh/store refresh */}
            {props.items && props.items.map(item => 
            <li key={item.id}>
                {item.name} - {item.price}
            </li>    
            )}
        </div>
    )
}

export default Items