// responsible for updating parts of store associated with markets

export default function marketReducer(state = {markets: []}, action ) {
    
    switch (action.type) {
        case 'FETCH_MARKETS':
        return {markets: action.payload}
        // return array that came back from fetch request
        case 'ADD_MARKET':
        return {...state, markets: [...state.markets, action.payload]}
        // markets should point to array with all previous accounts in it as well as new account
        case 'ADD_ITEM':
            //iterate over existing markets, checking if market from backend has same id as iteration market id
            //if yes replace market, if no return same market
        let markets =  state.markets.map(market => {
            if (market.id === action.payload.id) {
                return action.payload
            } else {
            return market 
            }
        })
        return {...state, markets: markets}
        case 'REMOVE_ITEM':
            debugger;
            let marketsRemove =  state.markets.map(market => {
                if (market.id === action.payload.id) {
                    return action.payload
                } else {
                return market 
                }
            })
            return {...state, markets: marketsRemove}

        default:
            return state
    }
}