import React from 'react';
import './App.css';
import Logos from './Logos';
import LogoIron from './images/LogoIron.png'
import MenuTop from './images/MenuTop.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'


const Logo1 = {
  logo : icon1,
  title : "Declarative",
  paragraph : "React makes it painless to create interactive UIs."
}

const Logo2 = {
  logo : icon2,
  title : "Components",
  paragraph : "Build encapsuled components that manage their state."
}

const Logo3 = {
  logo : icon3,
  title : "Singe-Way",
  paragraph : "A set of immutable values are passed to the component's."
}

const Logo4 = {
  logo : icon4,
  title : "JSX",
  paragraph : "Statically-typed, designed to run on modern browsers."
}



const App = () => {
  return (
    <div className="App">
      <nav className="NavBar"><img className="logoIron" src={LogoIron} alt="ironhackLogo"></img><img className="menuTop" src={MenuTop} alt='menuTop'></img></nav>
      <div className="bodyPage">
        <h1>Say hello to<br/>ReactJS</h1>
        <p>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</p>
        <button className='button'>Awesome!</button>
      </div>

      <div className='Fourlogo'>
      <Logos {...Logo1}/>
      <Logos {...Logo2}/>
      <Logos {...Logo3}/>
      <Logos {...Logo4}/>

      </div>

    </div>
  );
}

export default App;
