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
            <a href='https://www.instagram.com/inside_sidz_world/'><FiInstagram size={20} /></a></li>
          <li ><a href='https://twitter.com/Siddhes29888021'><FiTwitter size={20} /></a></li>
          <li ><a href='https://www.linkedin.com/in/siddhesh-dongare-945b16190/' ><FiLinkedin size={20} /></a></li>
          
      </ul>
      </div>
      <div className='verticalline'>
      </div>
     
    </div>
  )
}

export default SideComp