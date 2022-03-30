import React from 'react'

export default function Card({imgLoc, name, post, description, contacturl}) {
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card b--white-20 bg-white" style={{"width": "300px"}}>
        <img src= {imgLoc} alt="Project" style={{"width": "200px"}}></img>
        <div>
            <h2>{name}</h2>
            <h4>{post}</h4>
            {contacturl && <a href={contacturl || '#!'} className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black">Contact Me</a>}
        </div>
    </div>
  )
}
