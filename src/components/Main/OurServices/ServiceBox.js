import React from 'react'


const ServiceBox = ({title, description, url}) => {
  return (
    
      <div className="service-box">
          <div className="container content-box">
              <hr className="linje"/>
              <h3>
                      {title}
              </h3>
              <p>
                  {description}
              </p>
              <a href={url}><button className="circle-arrow"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></button></a>
          </div>
      </div>
  )
}

export default ServiceBox