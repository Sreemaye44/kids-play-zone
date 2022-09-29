import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import { addToDb,getFromDb } from '../FakeDb';
import Game from '../Game/Game';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Games.css';

const Games = () => {
    const notify = () => toast("Wow! Played Well");

    const breakTimeArray=[
        {time:10, id:1},
        {time:15, id:2},
        {time:20,id:3},
        {time:25,id:4},
        {time:30,id:5}
    ];
    const[games,setGames]=useState([]);
    const[time,setTime]=useState(0);
    const[breakTime,setBreakTime]=useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setGames(data))

    },[]);
    const handleAddToCart=game=>{
        const newTime = time + game.time
        setTime(newTime);
        addToDb("playTime",newTime);

    }
    const handleBreakTime=(time)=>{
        setBreakTime(time);
        addToDb("breakTime",time);
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
        {
            breakTimeArray.map(bktime=><Break bktime={bktime} key={bktime.id} handleBreakTime={handleBreakTime}></Break>)
            }

        </div>
        <h3>Playing Details</h3>
        <div className='info'>
            <h3>Play Time</h3>
            <p><small>{getFromDb("playTime")} seconds</small></p>
        </div>
        <div className='info'>
            <h3>Break Time</h3>
            <p><small>{getFromDb("breakTime")} seconds</small></p>
        </div>
        <button onClick={notify} className='btn-complete'>Activity Completed!</button>
        <ToastContainer />

        </div>
        </div>
    );
};

export default Games;