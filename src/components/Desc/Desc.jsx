import React from 'react';
import "./Desc.css"
const Desc = (props) => {
    return (
        <div className='desc'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque alias blanditiis a minima id. Voluptas eveniet cumque pariatur, recusandae perspiciatis suscipit, vel libero quas sequi doloribus non impedit corporis!</p>
            <div className="type">
                <button className='btntype'>{props.type}</button>
            </div>
        </div>
    );
}

export default Desc;
