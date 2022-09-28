import React from 'react';
import './Games.css';

const Games = () => {
    return (
        <div className='body'>
        <div className='game-area'>
            <div>
                <h3 className='game-plan'>Today's GamePlan for your Kid</h3>
            </div> 
            <div>
                <h4>Game list</h4>
            </div>
        </div>
        <div className='side-bar'>
        <div className='name'>
            <img src="../../../public/logo192.png" alt="hi" srcset="" />
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
            <p><small>seconds</small></p>
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