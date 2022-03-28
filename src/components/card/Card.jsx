import React from 'react'
import './Card.css'



const Card = ({places}) => {
  return (
    <div className="container">

      {places.map(place => {
        const {id,title,desc,image} = place ;
        return (
          <div className="card" key={id}>
            <h3>{title}</h3>
            <img src={image}/>
            <div className="layer">
              <p >{desc}</p>
            </div>
            
            




          </div>
        )
      })

      }

    </div>
  )
}

export default Card