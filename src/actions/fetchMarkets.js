
export function fetchMarkets() {
    //thunk function
    return (dispatch) => {
    fetch('https://farmers-market-backend.herokuapp.com/api/v1/markets')
    .then(resp => resp.json())
    .then(markets => dispatch({
        // take object from reducer
        type: 'FETCH_MARKETS',
        payload: markets
    }))
    }
}

// without thunk we cannot use dispatch inside action creator

// original fetch 
// 'http://localhost:3001/api/v1/markets'