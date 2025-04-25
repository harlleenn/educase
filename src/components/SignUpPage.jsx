import { useState } from 'react'
import React  from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
    const navigate = useNavigate()
    const [isAgency, setIsAgency] = useState("");
   const handleSubmit = (e) => {
    e.preventDefault()
    
     navigate("/profile");
    }
  return (
    <div className='SignUpContainer'>
        <div className='SignUp'>
            <div className='content'>
            <div className='PopX'>Create your <br></br>Popx Account</div>
            <br></br>
                <form onSubmit={handleSubmit}>
                <label htmlFor='name' className='label'>Full name</label><br></br>
                    <input 
                    className='input'
                    id='name'
                    type='text'
                    required
                    placeholder=' Full name'
                    /><br></br>

                <label htmlFor='phone' className='label'>Phone number</label><br></br>
                    <input 
                    className='input'
                    id='phone'
                    required
                    placeholder='91-XXXXXXXX'/>
                    <br></br>

                <label htmlFor='email' className='label'>Email address</label><br></br>
                    <input 
                    className='input'
                    id='email'
                    type='email'
                    required
                    placeholder='email@example.com'
                    />
                    <br></br>

                <label htmlFor='password' className='label'>Enter password</label><br></br>
                    <input
                    className='input'
                    id='password'
                    type='password'
                    required
                    placeholder='**********'
                    />
                    <br></br>
            <div className='agency'> 
                <p>Are you an agency?</p>
                <label>
                <input 
                    type='radio' 
                    name='agency' 
                    value='yes' 
                    checked={isAgency === "yes"}
                    onChange={(e) => setIsAgency(e.target.value)}
                />
                Yes
                </label>

                 <label>
                <input 
  
                type='radio' 
                name='agency' 
                value='no' 
                checked={isAgency === "no"}
                onChange={(e) => setIsAgency(e.target.value)}
                 />
                 No
            </label><br></br>
            
            <button type='submit' className='createAccount'>Create your account </button>
            </div>
           
            </form>
            </div>
        </div>
    </div>
  )
}
