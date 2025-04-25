import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate()

  return (

    <div className='Landing'>
         <div className='landingPage'>
                <div className='welcome'>
                    <div className='welcomeText'>Welcome to PopX</div>
                    <p>Lorem ipsum dolor sit amet <br></br> consectetur adipiscing elit </p>
                <div className='buttons'>
                    <button className='createAcc' onClick={() => navigate("/signUp")} >Create Account</button>
                    <button className='registered' onClick={() => navigate("/login")}>Already Registered? Login</button>
                </div>
              </div>
        </div>
    </div>
  )
}
