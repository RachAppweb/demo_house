import React from 'react';
import Navbar from '../navbar/Navbar';
import "./Testi.css"
import Comments from '../Comments/Comments';
import { villa,simple_house,big_house} from '../assets/Pics';
import Footer from '../Footer/Footer';
const Testi = () => {
    return (
        <>
           <Navbar/> 
           <div className="base">
           <div className='first'>
            <div className="section1">
            <h2>Header</h2>
            <p className='fi'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam commodi officia ipsam eum nostrum ducimus, tempora dicta eveniet repudiandae vitae alias consectetur similique pariatur fugit voluptatum quo qui consequuntur. </p>
            <p className='fi'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur minus consequuntur laborum, esse nemo ex ad inventore aut nostrum dolore corrupti, tenetur reiciendis</p>
            </div>
            <div className="section2">
              <h2>Steps</h2>
              <p className='fi'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quod. Totam quaerat iure ad provident repellendus consequatur esse doloribus consequuntur nihil aperiam. Repellat, asperiores? Nam libero ipsum nobis voluptatum amet?</p>
              <ul className='list'>
                <li>step 1</li>
                <li>step 2</li>
                <li>step 3</li>
                <li>step 4</li>
                <li>step 5</li>
              </ul>
              </div>
           </div>
            <div className="seconde">
                <h2>Testimonials</h2>
                <Comments name="Rachid Mouine" pi={villa}/>
                <Comments name="Ahmed Sabiri" pi={simple_house}/>
                <Comments name="Yassin Bono" pi={big_house}/>
            </div>
           </div>
           <Footer/>
        </>
    );
}

export default Testi;
