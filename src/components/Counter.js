import React from 'react'

class Counter extends React.Component {


    state = {
        count: 0
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count +1
        })
    }

    render (){
        return(
            <button onClick={this.increaseCount}>Vote Now! {this.state.count}</button>
        )
    }
}

export default Counter