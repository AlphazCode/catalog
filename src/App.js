
import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Catalog from './Pages/Catalog';
import {Route,Routes} from 'react-router-dom'
import {CloseIcon, NavBar, ProfileCard} from './ui-components'
import Auth from '@aws-amplify/auth';
import { Authenticator} from '@aws-amplify/ui-react';
import { useEffect, useState} from 'react';


const SignInPopup = () => {
  const [open, setOpen] = useState(false);
  const overrides = {
    "Button":{
      onClick:() => {setOpen(!open) ;!open ? document.body.style.overflow = "hidden" :  document.body.style.overflow = "visible"}}
    ,
    "image":{
      display:"none"
    }
  }  
  return (
    <>
    <NavBar overrides={overrides} width="100%" style={{position:"fixed", zIndex:"999"}} className="Navbar1"/>
      {open && (
        <div
          className="popup"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >         
        <div className="popup-wrapper">
          <CloseIcon className="popupButton" onClick={() => {setOpen(!open)  
          !open ? document.body.style.overflow = "hidden" :  document.body.style.overflow = "visible"
        }
        }/>
          <Authenticator  className="modal-fade">       
            {() => {setOpen(!open); window.location.reload()}}
          </Authenticator>
        </div>
        </div>
      )}
    </>
  );
};
const ProfilePopup = () => {
  const [open, setOpen] = useState(false);

  const NavBarOverrides = {
    "image":{
      onClick:() => {setOpen(!open)}
    },
    "Button":{
      display:"none"
    }
  }
  const ProfileCardOverride = {
    "Button":{
      onClick: ()=>{Auth.signOut()
      setTimeout(() =>{ window.location.reload()}, 500)}
    }
  }
  
  return (
    <>
    <NavBar overrides={NavBarOverrides} width="100%" style={{position:"fixed", zIndex:"999"}} className="Navbar1"/>
      {open && (
        <div
          className="profilePopup"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >         
        <div>
          <ProfileCard overrides={ProfileCardOverride}/>
        </div>
        </div>
      )}
    </>
  );
};


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    AssessLoggedInstate()
  }, [])
  const AssessLoggedInstate = () =>{
    Auth.currentAuthenticatedUser().then(() =>{
      setLoggedIn(true)}
    ).catch(()=>{
      setLoggedIn(false)
    })
  }

  return (
    <div className="Main">      
      {loggedIn ? <ProfilePopup/> : <SignInPopup/>}
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Catalog" element={<Catalog />} />
          <Route exact path="/Product/:id" element={<Product/>} />
      </Routes>
      </div>
  );
}

export default App
