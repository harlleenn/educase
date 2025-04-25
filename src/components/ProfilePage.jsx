import React from 'react';
import women from '../photo/women.jpg';



export default function ProfilePage() {
  return (
    <div className='profile'>
      <div className='profilePage'>
        <div className='settings'>Account settings</div>
          <div className='details'>
            <img src={women} alt='hello' style={{ width: "60px", height: "60px", borderRadius: "50%" }}/>
          </div>
          <div className='name-email'>
          <div >Mary doe</div>
          <div>MaryDoe@gmail.com</div>
          </div>
        
         
       
      
      <div className='paragraph'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit velit esse
           cillum dolore eu fugiat nulla pariatur.<br></br> Excepteur 
           sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
       
      </div>
     
    </div>

  )
}
