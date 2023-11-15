import React from 'react'
import '../Generics/Button'
import { Link } from 'react-router-dom'
import './NotFound.css'
import error_img from '../../assets/images/404-error-img.png'

const NotFound = () => {
  return (
    <div>
      
      <img className='error-img' src={error_img} alt=""/>
      <Link to="/" class="container btn-notfound" >Go back to Home page</Link>
    </div>
   
    
  )
}

export default NotFound