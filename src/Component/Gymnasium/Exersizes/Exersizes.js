import React from 'react';
import Exersize from '../Exersize/Exersize';
import './Exersizes.css';

const Exersizes = (props) => {
    // const{addValueToInfo} = props.addValueToInfo

    // console.log(props.addValueToInfo)
    
    return (
        <div className='card-display'>
            {
                (props.card).map(card => <Exersize addValueToInfo={props.addValueToInfo}  key={card.id}  card={card}></Exersize> )
            }
         

            
        </div>
    );
};

export default Exersizes;