import React from 'react'

const Button = ({type, url, title}) => {
  

    const getButtonClassName = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'black':
                return 'btn-black'
            default:
                return 'btn-transparent'
            case 'browse':
                return 'browse-services'
        }
    }



    return (
    <a href={url}><button className={getButtonClassName()}>{title}<i class="fa-regular fa-arrow-up-right"></i></button></a>
  )
}

export default Button