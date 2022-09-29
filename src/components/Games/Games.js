import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { addToDb } from '../FakeDb';
import Game from '../Game/Game';
import './Games.css';

const Games = () => {
    const[games,setGames]=useState([]);
    const[cart,setCart]=useState({});
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setGames(data))

    },[]);
    const handleAddToCart=game=>{
        console.log(game);
        setCart(game);
        
    }
    return (
        <div className='body'>
        <div className='game-area'>
            <div>
                <h2 className='game-plan'>Today's GamePlan for your Kid</h2>
            </div> 
            <div className='card-container'>
            {
               games.map(game=><Game game={game} key={game.id} handleAddToCart={handleAddToCart} ></Game>)
            }
            </div>
        </div>
        <div className='side-bar'>
        <div className='name'>
            <img src="../../../public/baby.jpg" alt="hi" />
            <div>
            <h2>Sagnik Kundu</h2>
            <p><small>Dhaka, Bangladesh</small></p>
            </div>
        </div>
        <div className='info'>
            <div>
            <h3>10kg</h3>
            <p><small>Weight</small></p>
            </div>

            <div>
            <h3>2</h3>
            <p><small>Height</small></p>
            </div>

            <div>
            <h3>1.5yrs</h3>
            <p><small>Age</small></p>
            </div>

        </div>
        <h3>Add a Break</h3>
        <div className='info'>
            <div className='time'>
            <h4>10</h4>
            </div>
            <div className='time'>
            <h4>10</h4>
            </div>
            <div className='time'>
            <h4>10</h4>
            </div>
            <div className='time'>
            <h4>10</h4>
            </div>
            <div className='time'>
            <h4>10</h4>
            </div>

        </div>
        <h3>Playing Details</h3>
        <div className='info'>
            <h3>Play Time</h3>
            <p><small>{cart.time}seconds</small></p>
        </div>
        <div className='info'>
            <h3>Break Time</h3>
            <p><small>seconds</small></p>
        </div>

        </div>
        </div>
    );
};

export default Games;