import React from 'react';
import './Exersize.css';

const Exersize = (props) => {
   
    const {name, image,  forAge, timeReq, description} = props.card
    const {addValueToInfo} = props
   
    return (
        <div className='card'>
             <img src={image} alt="images" />
                <div className='card-info'>
                    <h3>{name}</h3>
                    <p> <small> {description}</small></p>
                    <h5>Age: {forAge} yrs. </h5>
                    <h5>Time Req: {timeReq} sec</h5>
                </div>
            <div className='buttonDiv'>
            <button className='addButton' onClick={()=>addValueToInfo(timeReq)}>Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Exersize;