import React from 'react'
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='footer'>
     <div className='ftag'>Design and Built by Siddhesh Dongare</div>
     <div>
      <ul className='bottom'>
          <li >
            <a href='https://github.com/Siddhesh0002' ><FiGithub size={20} /></a></li>
          <li >
            <a href='#/'><FiInstagram size={20} /></a></li>
          <li ><a href='#/'><FiTwitter size={20} /></a></li>
          <li ><a href='https://www.linkedin.com/in/siddhesh-dongare-945b16190/' ><FiLinkedin size={20} /></a></li>
          
      </ul>
      </div>
    </div>
  )
}

export default Footer