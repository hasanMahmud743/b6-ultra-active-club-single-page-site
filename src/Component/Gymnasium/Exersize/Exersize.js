import React from 'react';
import './Exersize.css';

const Exersize = (props) => {
   
    const {name, image,  forAge, timeReq} = props.card
    const {addValueToInfo} = props
   
    return (
        <div className='card'>
             <img src={image} alt="images" />
            <h2>{name}</h2>
            <p>For Age: {forAge}</p>
            <p>Time Required: {timeReq}</p>
            <button onClick={()=>addValueToInfo(timeReq)}>Add to Cart</button>
            
        </div>
    );
};

export default Exersize;