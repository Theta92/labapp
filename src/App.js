import React from 'react';
import Navbar from './Navbar';
import CardComponent from './Card';
import './App.css';
import MyProfile from './images/MyProfile.jpg';

function App() {
  return (
    <div className="App">
        <Navbar />
          <h1>CS 330L</h1>
            <h2>Section - 010</h2>
            <p>WVU ID: 800386154</p>
            <p>Hello  I am Theophilus Oshoba</p>
            <img
                src={MyProfile}
                alt="My Profile"
                style={{ width: '150px', borderRadius: '50%' }}
              />
         <CardComponent />
    </div>
  );
}

export default App;

