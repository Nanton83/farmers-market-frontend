import React from 'react'
import {Link} from 'react-router-dom'

const NavigationBar = (props) => {

  return (
    <div>
      <Link to='/markets' style={{paddingRight: '10px'}}>Markets  </Link>
      <Link to='/markets/new'> Add Market</Link>
    </div>

  )
}

export default NavigationBar