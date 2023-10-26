import './Paperz.css'
import React from 'react'
import i_paperz from '../../../assets/images/paperz.png'
import i_dorufus from '../../../assets/images/dorufus.png'
import i_martino from '../../../assets/images/martino.png'
import i_square from '../../../assets/images/square.png'
import i_gobana from '../../../assets/images/gobana.png'

const Paperz = () => {
  return (
    <section className="paperz-collum">
        <div className="container">
            <div className="paperz">
                <img src={i_paperz} alt="paperz"/>
                <img src={i_dorufus} alt="dorufus"/>
                <img src={i_martino} alt="martino"/>
                <img src={i_square} alt="square"/>
                <img src={i_gobana} alt="gobana"/>
            </div>
        </div>
    </section>

  )
}

export default Paperz