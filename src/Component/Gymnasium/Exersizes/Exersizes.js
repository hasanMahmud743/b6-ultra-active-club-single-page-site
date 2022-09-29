import React from 'react';
import Exersize from '../Exersize/Exersize';
import './Exersizes.css';

const Exersizes = (props) => {
    const {card, addValueToInfo}= props
    
    return (
       <div>
        <h3 className='card-title'>Select todays Challange:</h3>
            <div className='card-display'>
            
                {
                    card.map(card => <Exersize addValueToInfo={addValueToInfo}  key={card.id}  card={card}></Exersize> )
                }

            </div>
       </div>
    );
};

export default Exersizes;