import React from 'react';
import "./Cards.css"
// import { pic1,pic2,pic3 } from '../assets/Pics';

const Cards = (props) => {
  
    return ( 
        <> 
        <div className="Categname">
            <h3>{props.title}</h3>
        </div>
        <div className='scrolling'>
            <div className="card">
           
                <img src={props.picso[0]} alt="" />
                
                <h3 className="title">{props.dt[0].name}</h3>
                <div className="info">
                <b className="location">{props.dt[0].location}</b>
                <b className="price">{props.dt[0].price}</b>
                </div>
                
            </div>
            <div className="card">
                <img src={props.picso[1]} alt="" />
                <h3 className="title">{props.dt[1].name}</h3>
                <div className="info">
                <b className="location">{props.dt[1].location}</b>
                <b className="price">{props.dt[1].price}</b>
                </div>
            </div>
            <div className="card">
                <img src={props.picso[2]} alt="" />
                <h3 className="title">{props.dt[2].name}</h3>
                <div className="info">
                <b className="location">{props.dt[2].location}</b>
                <b className="price">{props.dt[2].price}</b>
                </div>
            </div>
            <div className="card">
                <img src={props.picso[0]} alt="" />
                <h3 className="title">{props.dt[0].name}</h3>
                <div className="info">
                <b className="location">{props.dt[0].location}</b>
                <b className="price">{props.dt[0].price}</b>
                </div>
            </div>
            <div className="card">
                <img src={props.picso[1]} alt="" />
                <h3 className="title">{props.dt[1].name}</h3>
                <div className="info">
                <b className="location">{props.dt[1].location}</b>
                <b className="price">{props.dt[1].price}</b>
                </div>
            </div>
            <div className="card">
                <img src={props.picso[2]} alt="" />
                <h3 className="title">{props.dt[2].name}</h3>
                <div className="info">
                <b className="location">{props.dt[2].location}</b>
                <b className="price">{props.dt[2].price}</b>
                </div>
            </div>
        </div>
        </>
    );
}

export default Cards;

