import './styling/LandingPage.css'
import'./styling/SignUp.css'
import './styling/Login.css'
import './styling/Profile.css'
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ProfilePage from './components/ProfilePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signUp' element={<SignUpPage/>}/>
    <Route path='/profile' element={<ProfilePage/>} />

    
   </Routes>
   
    
  );
}

export default App;
