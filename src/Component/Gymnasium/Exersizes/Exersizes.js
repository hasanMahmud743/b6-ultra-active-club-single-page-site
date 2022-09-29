import React from 'react';
import Exersize from '../Exersize/Exersize';
import './Exersizes.css';

const Exersizes = (props) => {
    // const{addValueToInfo} = props.addValueToInfo

    // console.log(props.addValueToInfo)
    
    return (
       <div>
        <h3>Select todays Exersize</h3>
         <div className='card-display'>
           
           {
               (props.card).map(card => <Exersize addValueToInfo={props.addValueToInfo}  key={card.id}  card={card}></Exersize> )
           }
        

           
       </div>
       </div>
    );
};

export default Exersizes;