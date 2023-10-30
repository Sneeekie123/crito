import React from 'react'
import '../Generics/Button'
import { Link } from 'react-router-dom'
import './NotFound'

const NotFound = () => {
  return (
    <div className='Felbox container'>
      <h1>404 NotFound</h1>
      <Link to="/" class="btn-black" >go Back to beginning<i class="fa-regular fa-arrow-up-right"></i></Link>
    </div>
   
    
  )
}

export default NotFound