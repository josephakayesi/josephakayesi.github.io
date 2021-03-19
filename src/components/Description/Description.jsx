import React from 'react';
import './Description.css';
import logo from './logo.svg';

const Description = () => (
  <div className="Description">
    <h1>_</h1>
    <img className="Description__Logo" src={logo} alt="josephakayesi" />
    <p>I am a software engineer based in Accra, Ghana — and working remotely as a Backend Developer</p>
    <p>My interest areas are:  
      <ul style={{marginTop: "0em"}}>
      <li>Web</li>
      <li>Mobile</li>
      <li>Artificial Intelligence</li>
      <li>Blockchain (+Cryptocurrency)</li>
      <li>Design</li>
    </ul></p>
   
  </div>
);

export default Description;
