import React, { useContext } from 'react'
import Searchbar from '../../components/searchbar/Searchbar';
import './homepage.scss'
import { AuthContext } from '../../context/AuthContext';

function Homepage() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>Discover your dream home with our real estate app. Whether you're looking 
                    for a cozy apartment in the city or a spacious villa in the suburbs, we have 
                    a wide range of properties to suit your needs.
                </p>
                <Searchbar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src='./bg.png' alt=''></img>
        </div>
    </div>
  )
}

export default Homepage
