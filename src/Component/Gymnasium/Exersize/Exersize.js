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
                    <h4>For Age: {forAge} </h4>
                    <h4>Time Required: {timeReq} sec</h4>
                </div>
            <div className='buttonDiv'>
            <button className='addButton' onClick={()=>addValueToInfo(timeReq)}>Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Exersize;