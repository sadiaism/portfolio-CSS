import React from 'react'
import "../style/header.css"
import Link from 'next/link'

const header = () => {
  return (
    <div className='header'>
        <div className='right-div'>
            <ul className='ul'>
                <li className='li'><Link href="#home" className='link'>Home</Link></li>
                <li><Link href="#about" className='link'>About</Link></li>
                <li><Link href="#projects" className='link'>Projects</Link></li>
                <li><Link href="#contact" className='link'>Contact</Link></li>



            </ul>
        </div>
        
      
    </div>
  )
}

export default header
