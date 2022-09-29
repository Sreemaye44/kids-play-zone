import React from 'react';
import './Break.css';

const Break = (props) => {
    const{handleBreakTime,bktime}=props;
    const{time}=bktime;
    
    return (
       
            <div className='time'>
              <h4 onClick={()=>handleBreakTime(time)}> {time}</h4> 
              

            </div>
      
    );
};

export default Break;