import React from 'react';
import '../components/Generics/Button.css';
import NavSection from '../components/Header/NavSection/NavSection';
import Lets_Connect from '../components/Contact/Lets_Connect/Lets_Connect';
import Footer_top from '../components/Footer/Footer_top';
import Footer_icons from '../components/Footer/Footer_icons/Footer_icons';
import Call_Sites from '../components/Contact/Call_Sites/Call_Sites';
import Information from '../components/Contact/Information/Information';
import Map from '../components/Contact/Map/Map';


const Contacts = () => {
  return (
    <div className="wrapper">
      <NavSection />
      <main>
        <Lets_Connect />
        <Call_Sites />
        <Information />
        <Map />
      </main>
      <Footer_top />
      <Footer_icons />
    </div>
  )
}

export default Contacts
