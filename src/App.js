import { useState } from 'react';
import './App.css';
import { Hero, Offers, Menu, Discover, Reservation, Footer, Navbar,  } from './components';

function App() {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
      setNav(!nav)
  }
  return (
    <div  >
      <Navbar nav = {nav} />
      <Hero handleNav= {handleNav} nav = {nav} />
      <Offers/>
      <Menu/>
      <Discover/>
      <Reservation/>
      <Footer/>
      </div>
  );
}

export default App;
