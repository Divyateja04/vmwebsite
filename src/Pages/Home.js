import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import sherlock from '../Images/sherlocked.jpg';
import { Fade } from 'react-reveal';
import "animate.css/animate.css";

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`04/08/${year}`) - +new Date(); //MM/DD/YYYY
  
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
                <div className="cf">
                  <div className="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.days} Days
                  </div>
                  <div className="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.hours} Hours
                  </div>
                  <div className="fl w-25 tc pv5 bg-white-20 br">
                      {timeLeft.minutes} Minutes
                  </div>
                  <div className="fl w-25 tc pv5 bg-white-20">
                      {timeLeft.seconds} Seconds
                  </div>
                </div>
                <div className="bt bb tc mw7 center mt4 bg-white">
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Register">Register</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Events">Events</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Team">Team</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Sponsors">Sponsors</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Contact">Contact</Link>
                  <Link className="f6 f5-l link bg-animate black-80 hover-bg-purple dib pa3 ph4-l" to="/Schedule">Schedule</Link>
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
                  Nullam ornare, nisi eget vulputate pellentesque, metus metus tempor nisl, ut malesuada lacus lectus in nunc. Cras dapibus scelerisque nunc, sed tempus magna ultricies vel. Phasellus a leo sit amet eros euismod finibus nec eu orci. Suspendisse quis diam nec neque facilisis vestibulum non a diam. Pellentesque et vestibulum lorem, vel iaculis massa. Phasellus sagittis volutpat augue eu fermentum. Integer tincidunt est a nunc scelerisque dictum. Ut pretium augue ac odio molestie, at ultricies erat tempus. Maecenas tempus justo purus.
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
                  An alternate reality game: players explore the labyrinths of the online and offline world, through the intrigues of conspiracy theories, cryptology and history. An alternate reality game (ARG) is an interactive, networked narrative that uses the real world as a platform and employs transmedia storytelling to deliver a story that may be altered by players' ideas or actions
                  </p>
        
            </div>
            </Fade>
            <img src = {sherlock} className = 'home-image'/>
          </div>

          <div className='headline1 white'>
            <img src = {sherlock} className='home-image'/>
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
            <img src = {sherlock} className = 'home-image'/>
          </div>

          <Link to = "/Events" className='more'>...and more!</Link>
        </div>

      </div>
      
      

    );
}

export default Home;
