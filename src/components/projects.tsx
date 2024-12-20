import React from 'react'
import "../style/projects.css"
import Image from 'next/image'

const projects = () => {
  return (
    <main className='main'>
        <div className='h'> My Projects</div>

        <div className='boxes'>
            <div className='card'>
            <Image src={"/images/project1-pic.jpeg"}
            width={300}
            height={300}
            alt="Project1"/>
            </div>
            <div className='card'>
            <Image src={"/images/project2-pic.jpeg"}
            width={300}
            height={300}
            alt="Project1"/>  
            </div>
            <div className='card'>
            <Image src={"/images/project3-pic.jpeg"}
            width={300}
            height={300}
            alt="Project1"/>
            </div>
        </div>
    </main>
  )
}

export default projects
