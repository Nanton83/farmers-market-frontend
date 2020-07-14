 

export const removeItem = (itemId, marketId) => {

    //Async request

    return (dispatch) => {
        return fetch(`https://farmers-market-backend.herokuapp.com/api/v1/markets/${marketId}/items/${itemId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(market => dispatch({type: 'REMOVE_ITEM', payload: market}))

    }

}

// original fetch
// `http://localhost:3001/api/v1/markets/${marketId}/items/${itemId}`