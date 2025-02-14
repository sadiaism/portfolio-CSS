import React from 'react';
import "../style/contact.css";

const contact = () => {
  return (
    <div id="contact" className='num'>
        <div>
          <h1 className='h'>Contact Me</h1>
        <div className='box2'>
                    <label htmlFor="name"className='num1' >Name</label>
                    <input type="text"
                    className='h4'
                     />
                </div>
                <div className='box3'>
                    <label htmlFor="email" >Email</label>
                    <input type="text"
                    className='h4'
                     />
                </div>
                <div className='box3'>
                    <label htmlFor="phone" >Phone</label>
                    <input type="text"
                    className='h4'
                     />
                </div>


        </div>
      
    </div>
  )
}

export default contact
