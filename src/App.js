import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gender, setGender] = useState('');
  const [yourBestSubject, setYourBestSubject] = useState({
    english: true,
    maths: false,
    physics: false,
});
  const [resume , setResume] = useState('');
  const [url, setUrl] = useState('');
  const [choice, setChoice] = useState('');
  const [aboutYourself, setAboutYourself] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log(firstName, lastName, email, contactNumber, gender, yourBestSubject, resume, url, choice, aboutYourself);
  }

  function handleReset(e){
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setContactNumber('');
    setGender('');
    setYourBestSubject({
      english: true,
      maths: false,
      physics: false,
    });
    setResume('');
    setUrl('');
    setChoice('');
    setAboutYourself('');
  }
 
  return (
    <div className='App'>
      <div className='header'><h1>Form in React</h1></div>
        <form >

        <label htmlFor="firstname">First Name*</label>
        <input type="text" placeholder='Enter your first name' id="firstname" name="firstname" required onChange={(e) => setFirstName(e.target.value)}/>

        <label htmlFor="lastname">Last Name*</label>
          <input type="text" placeholder='Enter your last name' id="lastname" name="lastname" required onChange={(e) => setLastName(e.target.value)}/>

        <label htmlFor="Email">Email*</label>
          <input type="e-mail" placeholder='Enter your email' id="mail" name="mail" required onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="tel">Contact Number*</label>
          <input type="tel" placeholder='Enter your contact number' id="number" name="number" required onChange={(e) => setContactNumber(e.target.value)}/>

        <label htmlFor="gender" className='gender'>Gender*</label>
            <input type="radio" id="male" name="gender" value="male" required onChange={(e) => setGender(e.target.value)}/> Male
            <input type="radio" id="female" name="gender" value="female" required onChange={(e) => setGender(e.target.value)}/> Female
            <input type="radio" id="other" name="gender" value="other" required onChange={(e) => setGender(e.target.value)}/> Other

        <label htmlFor="Sub" className='Sub'>Your Best Subject*</label>
          <input type="radio" id="English" name="Subject" value="English" required onChange={(e) => setGender(e.target.value)}/> English
          <input type="radio" id="Maths" name="Subject" value="Maths" required onChange={(e) => setGender(e.target.value)}/> Maths
          <input type="radio" id="Science" name="Subject" value="Science" required onChange={(e) => setGender(e.target.value)}/> Science

        <label htmlFor="resume" className='resume'>Upload Resume*</label>
          <input type="file" id="file-upload" name="file-upload" onChange={(e) => setResume(e.target.value)}></input>

        <label htmlFor="url" className='URL'>URL*</label>
          <input type="url" id="url" name="url" required onChange={(e) => setUrl(e.target.value)}/>
        
        <label htmlFor="fruits" className='fruits'>Select your Choice</label>
            <select id="fruits" name="fruits" size="4" multiple onChange={(e) => setChoice(e.target.value)}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
            <option value="grape">Grape</option>
          </select>

        <label htmlFor="about" className='about'>About Yourself</label>
          <textarea id="about" name="about" rows="4" cols="50" onChange={(e) => setAboutYourself(e.target.value)}></textarea>

        <button type="reset" className='reset' value="reset" onClick={(e) => handleReset(e)}>Reset</button>
        <button type="submit" className='submit' value="Submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>

    </div>
  );
}

export default App;
