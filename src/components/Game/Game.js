import React from 'react';
import './Game.css'

const Game = (props) => {
    const {handleAddToCart,game}=props;
    const {name, details,Age,time,img}=game;
    
    return (
        <div className='card'>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p><small>{details.slice(0,120)}...</small></p>
        <p>For Age: {Age}</p>
        <p>Time Required: {time}min</p>
        <button onClick={()=>handleAddToCart(game)} className='btn-add'>Add to List</button>

       
        
            
        </div>
    );
};

export default Game;