import React from 'react'
import Card from '../Components/Card'

export default function Team() {
  return (
    <div>
      <h1 className='geraldine f1 mt0 pa4 white'>Team</h1>
      <h2 className='f2 white'>Office bearers of ELAS 2021-22</h2>
      <hr className="hrWidth"/>
      <Card imgLoc={"https://github.com/AshutoshPatel98/vm-website/blob/master/Images/abhiraj.JPG?raw=true"} name="Aditya Udapa" post="Secretary"  contacturl={"google.com"}/>
      <Card imgLoc={"https://github.com/AshutoshPatel98/vm-website/blob/master/Images/abhiraj.JPG?raw=true"} name="Sayyam Tiwari" post="Joint Secretary"  contacturl={"google.com"}/>
      <Card imgLoc={"https://github.com/AshutoshPatel98/vm-website/blob/master/Images/abhiraj.JPG?raw=true"} name="Shreya Senapathy" post="Treasurer"  contacturl={"google.com"}/>
      <h2 className='f2 white'>VM'2022 Team Leads</h2>
      <hr className="hrWidth"/>
      <Card imgLoc={"https://github.com/AshutoshPatel98/vm-website/blob/master/Images/abhiraj.JPG?raw=true"} name="Vivek" post="Design Team" contacturl={"google.com"}/>
      <Card imgLoc={"https://github.com/AshutoshPatel98/vm-website/blob/master/Images/abhiraj.JPG?raw=true"} name="Vedant Sinha" post="Sponsorship Team" contacturl={"google.com"}/>
      <Card imgLoc={"https://github.com/AshutoshPatel98/vm-website/blob/master/Images/abhiraj.JPG?raw=true"} name="Sajith" post="Offline Publicity Team"  contacturl={"google.com"}/>
      <Card imgLoc={"https://github.com/AshutoshPatel98/vm-website/blob/master/Images/abhiraj.JPG?raw=true"} name="Nehal" post="Online Publicity Team"  contacturl={"google.com"}/>
      <Card imgLoc={"https://github.com/AshutoshPatel98/vm-website/blob/master/Images/abhiraj.JPG?raw=true"} name="Dhruv Raghavan" post="Event Management Head"  contacturl={"google.com"}/>
    </div>
    
  )
}
