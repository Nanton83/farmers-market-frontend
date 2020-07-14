export const addMarket = (data) => {


    // returning function, taking dispatch as argument send data to reducer
    // thunk allows dispatch
    return (dispatch) => {
        
        fetch('https://farmers-market-backend.herokuapp.com/api/v1/markets', {
            headers: {
                'Content-Type': 'application/json',
                // Content sending down will be json
                'Accept': 'application/json'
                // What content types will be accepted on return of data
            },
            method: 'POST',
            body: JSON.stringify(data)
            // data is currently an object, expects data to be string
        }) 
        .then(response => response.json())
        // converting back into json
        .then(market => dispatch({type: 'ADD_MARKET', payload: market}))
        // dispatching to reducer with action object
        // adding to redux store without re-fetching data

    }

}

// original fetch
// 'http://localhost:3001/api/v1/markets'