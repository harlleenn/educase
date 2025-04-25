import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/profile"); // navigate to profile page
  };

  return (
    <div className='Login'>
      <div className='LoginPage'>
      <div className='SignInText'>Sign in to your Popx account
      <p className='para'>Lorem ipsum dolor sit amet <br></br> consectetur adipiscing elit</p>
      </div>
    

      <form onSubmit={handleSubmit}>
        
          <label htmlFor="email" className='label'>Enter Email:</label><br />
          <input
          className='input'
            id="email"
            type="email"
            placeholder="Enter email address"
            required
          />
  
          <label htmlFor="password" className='label'>Enter Password:</label><br />
          <input
           className='input'
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
      
        <div className='buttonCont'>
          <button type="submit" className='loginBtn'>
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}
