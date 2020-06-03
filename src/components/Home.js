import React from 'react';

//functional component - do not have state or lifecycle methods
const Home = () => {

    const textStyle = {
        textAlign:"center"
    }

    
    return( 
        <div className="container" style={textStyle}>
            <h1 >Welcome Berenstain Bear Family Farm</h1>
            <h2>494 East Quaker Town Road</h2>
            <h2>Bridgetown, West Virgina 28934</h2>
        </div>
    )
}


export default Home

//props can be considered as arguments to a function, are passed into a component and must be updated outside of component
//props are useful when wanting to display something inside component without hard coding

//state is handled inside component, and can be updated inside component.  When state is changed, it will re render component.  
//State is necessary when something needs to be updated/re rendered based on something the user has done