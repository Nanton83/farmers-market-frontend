 

export const removeItem = (itemId, marketId) => {

    //Async request

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/markets/${marketId}/items/${itemId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(market => dispatch({type: 'DELETE_ITEM', payload: market}))

    }

}