import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
           
           <div className='single'> 
           <h2>How does react work?</h2>
            <p>How does React website work?
Image result for how does react work
ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
           </div>

           <div className='single'>
            <h2>What's the differences between state & props?</h2>
            <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props</p>
           </div>

           <div className='single'>
            <h2>What does useEffect do without loading data?</h2>
            <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects without fetching data are directly updating the DOM, and timers,reading from localStorage, Registering and deregistering event listeners</p>
           </div>

        </div>
    );
};

export default Footer;