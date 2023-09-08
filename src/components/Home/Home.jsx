import React from 'react';
import Navbar from '../navbar/Navbar';
import Slider from '../Slider/Slider';
import Note from '../Note/Note';
import Cards from '../Cards/Cards';
import {villa,simple_house,big_house,hotel,pallet,house_od  } from '../assets/Pics';
import Footer from '../Footer/Footer';
import Desc from '../Desc/Desc';

const Home = () => {
    
    return (
        <>

           <Navbar/>
            <Slider/>
            
            <Note/>

             <Cards title=" First Section" picso={[villa,simple_house,big_house]}  dt={[ {name:"villa",location:"Germany",price:"40.000"}, {name:"simple house",location:"Italy",price:"70.000"},{name:"big house",location:"Morocco",price:"120.000"}]}/>
            <Cards title="Second Section" picso={[hotel,pallet,house_od ]} dt={[ {name:"Hotel",location:"France",price:"50.000"}, {name:"pallet",location:"Germany",price:"140.000"},{name:"House OD",location:"USA",price:"10.000"}]}/>
            <Desc type="buyer"/>

            <Desc type="seller"/>

            <Footer/>
        </>
    );
}

export default Home;
