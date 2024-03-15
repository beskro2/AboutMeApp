
import './App.css';
import myImage from './IMG_2196 (1).jpeg'

function toggleMenu(){
  var x = document.getElementById("hamburgerNav-links");
  if(x.style.display === 'block') {
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}

function App() {
  return (
 
    <div className="App">
      <nav id ="desktop-nav">
      <div className="menu-container">
      <div className='title'>
        <t>Ben Eskro</t>
      </div>
      <div className=''>
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
        <div className="hamburger-icon" onClick = {toggleMenu}>
          <span className ="burderSymbol">---</span>
          <span className ="burderSymbol">---</span>
          <span className ="burderSymbol">---</span>
        </div>
        <div id="hamburgerNav-links">
          <li><a href='#about' onClick = {toggleMenu}>about</a></li>
          <li><a href='#experience' onClick = {toggleMenu}>experience</a></li>
          <li><a href='#projects' onClick = {toggleMenu}>projects</a></li>
          <li><a href='#contact' onClick = {toggleMenu}>contact</a></li>
        
        </div>
      </nav>
      
       
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
      
    </div>
  );
}

export default App;
