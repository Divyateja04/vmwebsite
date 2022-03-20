import React from 'react'

export default function Card({imgLoc, name, description, contacturl}) {
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card b--white-20" style={{"width": "400px"}}>
        <img src= {imgLoc} alt="Project" style={{"width": "200px"}}></img>
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            {contacturl && <a href={contacturl || '#!'} className="noTextDecorationHome"><button type="button" className="btn mybtn-outline" >Contact me!</button></a>}
        </div>
    </div>
  )
}