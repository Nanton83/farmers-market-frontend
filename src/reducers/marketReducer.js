// responsible for updating parts of store associated with markets

export default function marketReducer(state = {markets: []}, action ) {

    switch (action.type) {
        case 'FETCH_MARKETS':
        return {markets: action.payload}
        // return array that came back from fetch request
        default:
            return state
    }
}