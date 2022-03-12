import React from 'react'
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';


const SideComp = () => {
  return (
    <div className='leftcomp'>
      <div>
      <ul>
          <li >
            <a href='https://github.com/Siddhesh0002' ><FiGithub size={20} /></a></li>
          <li >
            <a href='#/'><FiInstagram size={20} /></a></li>
          <li ><a href='#/'><FiTwitter size={20} /></a></li>
          <li ><a href='https://www.linkedin.com/in/siddhesh-dongare-945b16190/' ><FiLinkedin size={20} /></a></li>
          
      </ul>
      </div>
      <div className='verticalline'>
      </div>
     
    </div>
  )
}

export default SideComp