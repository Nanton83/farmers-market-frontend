
export function fetchMarkets() {
    //thunk function
    return (dispatch) => {
    fetch('http://localhost:3001/api/v1/markets')
    .then(resp => resp.json())
    .then(markets => dispatch({
        // take object from reducer
        type: 'FETCH_MARKETS',
        payload: markets
    }))
    }
}

// without thunk we cannot use dispatch inside action creator