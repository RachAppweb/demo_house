import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    
        <div className='footer'>
            <footer >
                <div className="social">
               <Link to={"https://www.facebook.com/profile.php?id=100036547980205"}><i class="fa-brands fa-facebook "id='icon'></i></Link> 
               <Link to={"https://www.linkedin.com/in/mouine-rachid-a51b13241"}><i class="fa-brands fa-linkedin"id='icon'></i></Link> 
                <Link to={"https://github.com/RachAppweb"}><i class="fa-brands fa-github"id='icon'></i></Link>
                </div>
                <div className="pages">
                    <div className="first">
                        <h4>Content1</h4>
                        <p>page</p>
                        <p>page</p>
                        <p>page</p>
                        <p>page</p>
                    </div>
                    <div className="first">
                        <h4>Content2</h4>
                        <p>page</p>
                        <p>page</p>
                        <p>page</p>
                        <p>page</p>
                    </div>
                    <div className="first">
                        <h4>Content3</h4>
                        <p>page</p>
                        <p>page</p>
                        <p>page</p>
                        <p>page</p>
                    </div>
                </div>
                <div className="fologo">
                    <div className="things">
                    <h4>House</h4>
                    </div>
                    <div className="moreinfo">
                        <p>Morocco</p>
                        <p>Agadir</p>
                        <p> +212 640151758</p>
                    </div>
                    
                </div>

            </footer>
        </div>
        
        
    );
}

export default Footer;
