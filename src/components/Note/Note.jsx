import React from 'react';
import "./Note.css"
const Note = () => {
    return (
        <div className='main'>
            <div className="note">
                <h4>
                    please you have to select wether you a seller or buyer !
                </h4>
                
            </div>
            <div className="buttons">
                <button className='btn'>buyer</button>
                <button className='btn'>seller</button>
            </div>
        </div>
    );
}

export default Note;
