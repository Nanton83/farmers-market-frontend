export const addItem = (item, marketId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/markets/${marketId}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(market => {
            if (market.error) {
                alert(market.error)
            } else {
                dispatch({type: 'ADD_ITEM', payload: market})  
            }
        }
    )

    }
    // returning dispatch so we can use to dispatch to our reducer
}