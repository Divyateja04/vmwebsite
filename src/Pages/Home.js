import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import sherlock from '../Images/sherlocked.png';
import ship from "../Images/shipwrecked.jpg"
import arg from "../Images/ARG.png"
import superpos from "../Images/superposition.png";
import { Fade } from 'react-reveal';
import "animate.css/animate.css";

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`06/10/${year}`) - +new Date(); //MM/DD/YYYY
  
    let timeLeft = null;
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }

function Home() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    return (
      <div>
        <div className="home-header">
              <div className="pa3 pa4-ns">
                <div className="white f1 f-headline-ns tc db mb3 mb4-ns" title="Home"><span className='quickkiss'>Verba</span><span className="quickkiss">Maximus</span> | <span className='white'>{new Date().getFullYear()}</span></div>
                {(timeLeft && timeLeft.days+timeLeft.minutes+timeLeft.seconds+timeLeft.hours !== 0) 
                ?
                  (<div className="cf">
                    <div className="fl w-25 tc pv5 bg-white-20 br timeBox">
                        {timeLeft.days} Days
                    </div>
                    <div className="fl w-25 tc pv5 bg-white-20 br timeBox">
                        {timeLeft.hours} Hours
                    </div>
                    <div className="fl w-25 tc pv5 bg-white-20 br timeBox">
                        {timeLeft.minutes} Minutes
                    </div>
                    <div className="fl w-25 tc pv5 bg-white-20 timeBox">
                        {timeLeft.seconds} Seconds
                    </div>
                  </div>) : (
                  <section class="ph3 ph3-ns pv3">
                      <article class="mw7 center br2 ba b--light-blue bg-white">
                      <div class="dt-ns dt--fixed-ns w-100">
                          <div class="pa3 pa4-ns dtc-ns v-mid">
                            <div>
                                <h2 class="fw4 purple mt0 mb3">Registrations are now open!!</h2>
                                <p class="black-70 measure lh-copy mv0">#HappilyNeverAfter</p>
                            </div>
                          </div>
                          <div class="pa3 pa4-ns dtc-ns v-mid">
                            <a href="#" class="no-underline f6 tc db w-100 pv3 bg-animate bg-purple hover-bg-dark-purple white br2">Register Now</a>
                          </div>
                      </div>
                      </article>
                  </section>
                )}
                <div className="bt bb tc mw7 center mt4 bg-black">
                  <a className="f6 f5-l link bg-animate white-80 hover-bg-purple dib pa3 ph4-l" href="https://forms.gle/VZgJVoBmsAHoGPAb6" target="_blank">Register</a>
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-purple dib pa3 ph4-l" to="/Events">Events</Link>
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-purple dib pa3 ph4-l" to="/Team">Team</Link>
                  {/* <Link className="f6 f5-l link bg-animate white-80 hover-bg-purple dib pa3 ph4-l" to="/Sponsors">Sponsors</Link> */}
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-purple dib pa3 ph4-l" to="/Contact">Contact</Link>
                  <Link className="f6 f5-l link bg-animate white-80 hover-bg-purple dib pa3 ph4-l" to="/Schedule">Schedule</Link>
                </div>
            </div>
        </div>

        <div className='content'>
          <div className='headline1 white'>
            <img src = {sherlock} className='home-image'/>
            <Fade right>
            <div className='headline-desc'>
              <h1 className='quickkiss'>SHERLOCKED</h1>
              <hr className='hrWidth'/>
                  <p>
                  There has been a murder on campus. In this evolving case that has roped in eight separate individuals, confusion has been the only constant. You are our only shot at solving this murder mystery. Interrogate and cross-examine the eight suspects as you attempt to uncover the truth at SHERLOCKED, VM 2O22, and help us crack the case!
                  </p>
            </div>
            </Fade>
          </div>

          <div className='headline1 white'>
            <Fade left>
            <div className='headline-desc'>
              <h1 className='quickkiss'>ARG</h1>
              <hr className='hrWidth'/>
                  <p>
                  ARG - “Alternate Reality Game” is an internet maze where your team navigates through
                  an online labyrinth in search for answers of a gripping story that has twists and turns at
                  every corner. Can you braid together the web of clues present in the vastness of
                  cyberspace and unravel the nuances of the narratives? Mental fortitude and thinking on
                  your feet are helpful traits as the ARG is sure to test your patience, but rest assured it is a
                  very rewarding experience that is sure to satiate your thirst for an adventurous thrill.
                  </p>
        
            </div>
            </Fade>
            <img src = {arg} className = 'home-image'/>
          </div>

          <div className='headline1 white'>
            <img src = {ship} className='home-image'/>
            <Fade right>
            <div className='headline-desc'>
              <h1 className='quickkiss'>SHIPWRECKED</h1>
              <hr className='hrWidth'/>
                <p>
                Participants have to use only words to ensure their survival in a particularly sticky situation.

                Stranded on a slowly sinking ship, as each minute ticks down, you inch ever so closer to your (possibly?) inevitable demise.
                As you choose a character from pop culture - books, shows or television, words are all you have to convince the moderator to give you the life-jacket
                </p>
            </div>
            </Fade>
          </div>

          <div className='headline1 white'>
            <Fade left>
            <div className='headline-desc'>
              <h1 className='quickkiss'>SUPERPOSITION</h1>
              <hr className='hrWidth'/>
                  <p>
                  Our theme event for VM 2022. <br />
                  We will have three writing prompts, each representing one of the three main aesthetics of this year’s theme.
                  <br /><br />
                  As we visit ideas, landscapes, and scenarios from each of our three motifs, each one more evocative and vivid than the last, it’s up to you to write your path through this concept-jumping, interdimensional journey.
                  </p>
        
            </div>
            </Fade>
            <img src = {superpos} className = 'home-image'/>
          </div>

          <Link to = "/Events" className='more quickkiss'>...and more!</Link>
        </div>

      </div>
      
      

    );
}

export default Home;
