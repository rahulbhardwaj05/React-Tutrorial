import React from 'react'
import './Hero.css'
 import profile_img from '../../assets/profime_img/ProfileIMG.jpg'



function Hero() {
  return (
    <div className='hero'>
     <img src={profile_img} alt="" />
     <h1><span>I,m Rahul Bhardwaj,</span> frontend developer based in India</h1>
     <p>A frontend developer is a type of web developer who specializes in creating the user-facing part of websites and web applications</p>
     <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">my Resume</div>
     </div>
    </div>
  )
}

export default Hero


