import React from 'react';
import gitHubLogo from '../images/github.png'
import twitterLogo from '../images/twitter.png'

const Footer = () => {
  return (
    <>
      <h1 className="card--footer">Footer</h1>
      <img className="footer--logo" src={gitHubLogo} alt="" />
      <img className="footer--logo" src={twitterLogo} alt="" />
      <img className="footer--logo" src={gitHubLogo} alt="" />
      <img className="footer--logo" src={gitHubLogo} alt="" />
    </>
  )
}


export default Footer;