// responsible for updating parts of store associated with markets
//takes current state and outputs new state with changes that need to be made
//redux action is creating a new state tree every single time

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

export default function marketReducer(state = {markets: []}, action ) {
    
    switch (action.type) {
        // action.type describes action
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
            // debugger;
            let marketsRemove = state.markets.map(market => {
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