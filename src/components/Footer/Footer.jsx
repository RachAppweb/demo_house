import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <footer >
                <div className="social">
                <i class="fa-brands fa-facebook "id='icon'></i>
                <i class="fa-brands fa-linkedin"id='icon'></i>
                <i class="fa-brands fa-github"id='icon'></i>
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
