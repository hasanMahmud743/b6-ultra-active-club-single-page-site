import React, { useEffect, useState } from 'react';
import Info from './ExersizeInfo/info';
import Exersizes from './Exersizes/Exersizes';

import './Gymnasium.css';

let newTime = 0
const Gymnasium = () => {
    const[cards, setCard]= useState([])
    const [addValue, setAddValue] = useState(0)
        
    
    const addValueToInfo = (time) =>{
        
        newTime = time + newTime
          setAddValue(newTime)
    }

    

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCard(data))
    }, [])




    return (
        <div className='gym-card'>
            
            <div>
                <Exersizes addValueToInfo={addValueToInfo}    card={cards}></Exersizes>
            </div>

            <div>
                <Info  addValue={addValue}></Info>
            </div>

        </div>
    );
};

export default Gymnasium;