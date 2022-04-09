import React from 'react'
import Card from '../Components/CardMui.js'
import sherlocked from "../Images/sherlocked.png"
import devil from "../Images/devil.png"
import jam from "../Images/JAM.png"
import ship from "../Images/shipwrecked.jpg"
import symphony from "../Images/symphony.png"
import lit from "../Images/lit.png"
import bamboozled from "../Images/bamboozled.png"
import babbling from "../Images/babbling.jpg"
import bollywood from "../Images/bollywood.jpg"
import dialectic from "../Images/dialectic.jpg"
import troll from "../Images/trolls.jpg"
import slam from "../Images/slam.jpg"
import picture from "../Images/picture.jpg"
import dayinlife from "../Images/dayinlife.jpg"
import whatif from "../Images/whatif.png"
import arg from "../Images/ARG.png"
import superpos from "../Images/superposition.png"

export default function Events() {
  return (
    <div className=''>
      <h1 className='geraldine f1 mt0 pa4 white'>Events</h1>
      {/* <h2 className='f2 white'>Speaking</h2> */}
      {/* <hr className="hrWidth"/> */}
      <div className='pa4 flex-wrap'>
      <Card
        imgUrl={sherlocked}
        name={"Sherlocked"}
        outPara={`There has been a murder on campus. In this evolving case that has roped in eight separate individuals, confusion has been the only constant. `}
        inPara1={`You are our only shot at solving this murder mystery. Interrogate and cross-examine the eight suspects as you attempt to uncover the truth at SHERLOCKED, VM 2O22, and help us crack the case!`}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={arg}
        name={"ARG"}
        outPara={`ARG - “Alternate Reality Game” is an internet maze where your team navigates through
        an online labyrinth in search for answers of a gripping story that has twists and turns at
        every corner. Can you braid together the web of clues present in the vastness of
        cyberspace and unravel the nuances of the narratives? `}
        inPara1={`Mental fortitude and thinking on
        your feet are helpful traits as the ARG is sure to test your patience, but rest assured it’s a
        very rewarding experience that is sure to satiate your thirst for an adventurous thrill.`}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={ship}
        name={"Shipwrecked"}
        outPara={`Participants have to use only words to ensure their survival 
        in a particularly sticky situation`}
        inPara1={`Stranded on a slowly sinking ship, as each minute ticks down, you inch ever so closer to your (possibly?) inevitable demise.`}
        inPara2={`As you choose a character from pop culture - books, shows or television, words are all you have to convince the moderator to give you the life-jacket`}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={superpos}
        name={"Superposition"}
        outPara={`Our theme event for VM 2022.`}
        inPara1={`We will have three writing prompts, each representing one of the three main aesthetics of this year’s theme.`}
        inPara2={`As we visit ideas, landscapes, and scenarios from each of our three motifs, each one more evocative and vivid than the last, it’s up to you to write your path through this concept-jumping, interdimensional journey.`}
        inPara3={``}
        inPara4={``}/>
        
      <Card
        imgUrl={jam}
        name={"JAM"}
        outPara={`Participants try to out-blabber one another in VM’s signature JAM event.`}
        inPara1={`In everyone’s favourite rapid-action, tongue-twister game, your finger (or in this case, mouth) must be on the trigger like never before.`}
        inPara2={`How long can you run your mouth before you’re picked off by someone else?`}
        inPara3={`With a timer counting down and opponents all around you, you must be hyper-aware in order to not falter - stumble, and it’s all over.`}
        inPara4={``}/>
        
      <Card
        imgUrl={devil}
        name={"Devil’s Advocate"}
        outPara={`Participants have to defend and justify arguments that may be unpopular, distasteful, or just downright awful.`}
        inPara1={`The ultimate contest for all morally…flexible people with questionable integrity.
        As you grapple with your own personal ethical codes, you’ll find yourselves racking your brains to figure out how to rationalize and represent some of the most morally reprehensible opinions we can come up with.
        `}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>
      
      <Card
        imgUrl={picture}
        name={"Picture Perspective"}
        outPara={`In this writing event, participants let their mind and soul do the talking as they write after being given picture prompts.`}
        inPara1={`What seems like straight lines to one person may look like an endless curve to another. `}
        inPara2={`Will you be able to forsake your outlook for the chance of learning something new?`}
        inPara3={`There are more perceptions of reality than atoms in the universe, but in order to see any of them, you might have to compromise being ‘right’.`}
        inPara4={``}/>

      <Card
        imgUrl={slam}
        name={"Slam Poetry"}
        outPara={`"Some of us are lilies, not all of us are roses,
        Some of us are verses, not all of us are proses."
        `}
        inPara1={`A VM classic, this event gives participants a stage like no other to express their true, unfiltered selves.`}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={babbling}
        name={"Babbling Statues"}
        outPara={`A writing event similar to Twisted Tales but instead of fairy tales, participants write about Greek myths.`}
        inPara1={`A reinvention of burned-out myths and their vapour trails.`}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={troll}
        name={"Trolls and Troubles"}
        outPara={`As a bard, participants have to rely on their natural charisma to try and flirt with a troll in order to gain safe passage over a bridge.`}
        inPara1={`Not just limited to love poetry, pieces can be anything from a love poem or drabble to a rap. In this anything-goes, no-holds-barred, and extremely fun writing and performance event, you have the freedom to be as outlandish and/or silly in your approach as you want.`}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={dialectic}
        name={"Dialectic"}
        outPara={`This event is all about satire and exaggerating genres.`}
        inPara1={`Participants are on either one of two sides: romantic or cynic. As a romantic, you are a starry-eyed daydreamer that only sees the ideal, and as a cynic, you are a disillusioned skeptic who doesn’t trust anything.`}
        inPara2={`In a ‘battle-of-the-bards’ style scenario, you must write and perform your satire pieces (anything from stream-of-consciousness to limericks) as you defend your worldview.`}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={symphony}
        name={"Symphonies of the Soul"}
        outPara={`Participants let their mind and soul do the talking as they
        write after being given picture prompts.`}
        inPara1={``}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={lit}
        name={"Lit Quiz"}
        outPara={`A quiz filled with literature trivia and facts, with questions
        covering everything from classics to comics.`}
        inPara1={``}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>

      <Card
        imgUrl={bamboozled}
        name={"Bamboozled"}
        outPara={`Inspired by F.R.I.E.N.D.S., compete in teams of 2 in a wild game show.`}
        inPara1={``}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>  

      <Card
        imgUrl={bollywood}
        name={"Apun ka Bollywood"}
        outPara={`A chance to rewrite some of your favourite Bollywood movies, the way you would have wanted them.`}
        inPara1={``}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>  

      <Card
        imgUrl={dayinlife}
        name={"A Day in the Life"}
        outPara={`Put yourself in the shoes of certain people or objects and trace out the thoughts and feelings that they experience in an entire day. Be the captain of their story as you lead us through their everyday happenings and bring the world inside their head to life.`}
        inPara1={``}
        inPara2={``}
        inPara3={``}
        inPara4={``}/>  

      <Card
        imgUrl={whatif}
        name={"What If?"}
        outPara={`It’s time to swing the battle axe and raise the magic staff. The Journal Club presents – What If? – a choice-based, live-action RPG that takes place in the campus itself.`}
        inPara1={`Battle monsters, solve riddles and manage your team as you progress through the land and try to uncover secrets that are buried and long forgotten. Build a class-based team of four and take on the challenge that lies ahead of you.`}
        inPara2={``}
        inPara3={``}
        inPara4={``}/> 
      </div>
    </div>
  )
}
