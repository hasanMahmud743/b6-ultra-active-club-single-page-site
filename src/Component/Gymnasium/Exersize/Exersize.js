import React from 'react';
import './Exersize.css';

const Exersize = (props) => {
   
    const {name, image,  forAge, timeReq, description} = props.card
    const {addValueToInfo} = props
   
    return (
        <div className='card'>
             <img src={image} alt="images" />
                <div className='card-info'>
                    <h2>{name}</h2>
                    <p> <small> {description}</small></p>
                    <p>For Age: {forAge}</p>
                    <p>Time Required: {timeReq}</p>
                </div>
            <button onClick={()=>addValueToInfo(timeReq)}>Add to Cart</button>
            
        </div>
    );
};

export default Exersize;