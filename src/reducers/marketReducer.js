// responsible for updating parts of store associated with markets

export default function marketReducer(state = {markets: []}, action ) {

    switch (action.type) {
        case 'FETCH_MARKETS':
        return {markets: action.payload}
        // return array that came back from fetch request
        case 'ADD_MARKET':
        return {...state, markets: [...state.markets, action.payload]}
        // markets should point to array with all previous accounts in it as well as new account
        default:
            return state
    }
}