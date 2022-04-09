import React from 'react'
import Card from '../Components/Card'
import photo1 from '../Images/Udupa.jpg';
import photo2 from '../Images/Sayyam.jpg';
import photo3 from '../Images/Shreya.jpg';
import photo4 from '../Images/Vivek.jpg';
import photo5 from '../Images/Vedant.jpg';
import photo6 from '../Images/Sanjith.jpg';
import photo7 from '../Images/Nehal.jpg';
import photo8 from '../Images/Dhruv.jpg';
import photo9 from '../Images/Srikant.jpeg';
import photo10 from '../Images/Atharva.jpeg';
import photo11 from '../Images/Divya.jpeg';

export default function Team() {
  return (
    <div>
      <h1 className='geraldine f1 mt0 pa4 white'>Team</h1>
      <h2 className='f2 white'>Office bearers of ELAS 2021-22</h2>
      <hr className="hrWidth"/>
      <Card imgLoc={photo1} name="Aditya Udupa" post="Secretary"  contacturl={"https://wa.me/918978895029"}/>
      <Card imgLoc={photo2} name="Sayyam Tiwari" post="Joint Secretary"  contacturl={"https://wa.me/919511295952"}/>
      <Card imgLoc={photo3} name="Shreya Senapaty" post="Treasurer"  contacturl={"https://wa.me/917675057722"}/>
      <h2 className='f2 white'>VM'2022 Team Leads</h2>
      <hr className="hrWidth"/>
      <Card imgLoc={photo4} name="Vivek Das" post="Design Team" contacturl={"https://wa.me/919990302702"}/>
      <Card imgLoc={photo5} name="Vedant Sinha" post="Sponsorship Team" contacturl={"https://wa.me/916376295839"}/>
      <Card imgLoc={photo6} name="Sanjith Krishna" post="Offline Publicity Team"  contacturl={"https://wa.me/919043061845"}/>
      <Card imgLoc={photo7} name="Nehal Naidu" post="Online Publicity Team"  contacturl={"https://wa.me/917995257775"}/>
      <Card imgLoc={photo8} name="Dhruv Raghavan" post="Event Management Head"  contacturl={"https://wa.me/918197977773"}/>
      <Card imgLoc={photo10} name="Atharva Mahajan" post="Logistics Head"  contacturl={"https://wa.me/919901982288"}/>
      <Card imgLoc={photo9} name="Srikant Tangirala" post="Web Development"  contacturl={"https://wa.me/919821295377"}/>
      <Card imgLoc={photo11} name="Divyateja Pasupuleti" post="Web Development"  contacturl={"https://wa.me/919502833111"}/>
    </div>
    
  )
}
