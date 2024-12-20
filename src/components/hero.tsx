import React from 'react'
import "../style/hero.css"
import Image from 'next/image'

const hero = () => {
  return (
    <div className='container'>
        <div className='img-div'>
            <Image src={"/images/profile-pic.jpeg"}
            width={600}
            height={600}
            alt="Profile"/>
        </div>
        <div className='h2'>
            <h2 className='heading'>I'm</h2>
            <h2 className='heading'>SADIA</h2>
            <h2 className='heading'>ALAMDAR</h2>
        </div>

      
    </div>
  )
}

export default hero
