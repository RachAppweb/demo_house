import React from 'react';
import "./Comments.css"

const Comments = (props) => {
    return (
        <div className='tes'>
            <div className="coimg">
                <span><img className='imga' src={props.pi} alt="" /> </span>
            </div>
            <div className="thecom">
            <b>{props.name}</b>
                <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aliquam possimus enim nisi sit accusamus veritatis eum dolor, tenetur, deserunt reiciendis id facere impedit explicabo rem exercitationem error? Exercitationem, enim.</p>

            </div>
        </div>
    );
}

export default Comments;
