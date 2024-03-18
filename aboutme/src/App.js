
import './App.css';
import myImage from './IMG_2196 (1).jpeg'
import { useState } from 'react';

function App() {

  const [menuOpen, changeMenuOpen] = useState(false);

function toggleMenu(e){
  
 changeMenuOpen(!menuOpen);
 console.log(menuOpen);
}
  return (
 
    <div className="App">

      <nav id ="desktop-nav">
      <div className="menu-container">
      <div className='title'>
        <t>Ben Eskro</t>
      </div>
      <div >
        <ul className="nav-links">
          <li><a href='#about'>about</a></li>
          <li><a href='#experience'>experience</a></li>
          <li><a href='#projects'>projects</a></li>
          <li><a href='#contact'>contact</a></li>
        </ul>
        </div>
      </div>
      </nav>

      <nav id = "hamburger-nav">
        <div className='title'>
          <t>Ben Eskro</t>
        </div>
      
        <label class="burger" for="burger" >
          <input type="checkbox"  checked = {menuOpen} id="burger" onChange={toggleMenu}/>
          <span></span>
          <span></span>
          <span></span>
        </label>
        {/* */}

       
     
      </nav >
      {menuOpen && 
        <ul className="hamburgerNav-links">
          <li><a href='#about' onClick = {toggleMenu}>about</a></li>
          <li><a href='#experience' onClick = {toggleMenu}>experience</a></li>
          <li><a href='#projects' onClick = {toggleMenu}>projects</a></li>
          <li><a href='#contact' onClick = {toggleMenu}>contact</a></li>
        
        </ul>
}

<div className='flex-container'> 

<div className='image-container'>
  <img src={myImage} className="circle-image"alt="professional headshot" />
</div>

      <div className='bio'>
        <p>
        Hello and welcome to my website. I’m Ben Eskro, a recent collage graduate with a passion for solving real
        world problems with software solutions. Through my studies at North Dakota State University, I developed
        a passion for creating user friendly applications and honed my skills in front-end software development.
        My evolution as a developer can be attributed to my love for learning new things and persisting in the
        face of failure. When I’m not coding, you can find me gearing up to explore the outdoors or playing 
       boardgames with my friends. 
        </p>
      </div>
</div>

<div className='projects'>
  




</div>
      
    </div>
  );
}

export default App;
