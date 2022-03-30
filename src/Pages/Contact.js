import axios from 'axios';
import React, {useState} from 'react'

export default function Contact() {
  const FORM_ENDPOINT = "https://public.herotofu.com/v1/71322400-adb5-11ec-b83f-8f17e10d6288";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const onIssueChange = (e) => {
    setIssue(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(FORM_ENDPOINT, { name, email, phone, issue})
    
    setEmail("")
    setIssue("")
    setName("")
    setPhone("")
    
  }

  return (
    <div>
      <main className="pa4 black-80 vh-100-ns">
        <form className="measure center" onSubmit={handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0 form">
            <legend className="f2 white fw6 ph0 mh0">Contact Us</legend>
            <div className="mt3">
              <label className="db white fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" type="text" name="name"  id="name" onChange={onNameChange} required value={name}/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f6" htmlFor="email">Email</label>
              <input className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" type="email" name="email" id="email" onChange={onEmailChange} required value={email}/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f6" htmlFor="phone">Phone Number</label>
              <input className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" type="tel" name="phone"  id="phone" onChange={onPhoneChange} value={phone}/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f6" htmlFor="phone">Query</label>
              <textarea id="issue" name="issue" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" onChange={onIssueChange} required value={issue} />
            </div>
          </fieldset>
          <div className="">
            <input className="b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
          </div>
        </form>
      </main>
    </div>
  )
}
