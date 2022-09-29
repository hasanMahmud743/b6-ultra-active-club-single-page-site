import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './info.css';
const Info = (props) => {
    const [duration, setDuration] =useState(0)

    useEffect(()=>{
        const localValue = localStorage.getItem('BreakTime')
        console.log(localValue)
        setDuration(localValue)
    },[])


    const breakHandler =(duration)=> {
        localStorage.setItem('BreakTime', duration)
        
        
        setDuration(duration)
    }

    const notify = () => toast("Your activities is completed for today!");


    return (
        <div className='infoDiv'>
            <h2> <span style={{color: 'rgb(74, 30, 235)'}}> Mahmudul's</span> Fitness Report:</h2>
                <div className='bio'>
                    <div>
                        <h1>65kg</h1>
                        <p className='muteColor'>Weight</p>

                    </div>
                    
                    <div>
                        <h1>5.7"</h1>
                        <p className='muteColor'>Height</p>
                    </div>

                    <div>
                        <h1>23</h1>
                        <p className='muteColor'>Age</p>
                        
                    </div>

                

                </div>
            {/* <h3> W-63kg, H-5.7", Age-23</h3> */}
            <h3>Add a Break</h3>
            <div className='button-group'>
                <button style={{backgroundColor:duration === 10 && 'rgb(74, 30, 235)'}}   onClick={()=> breakHandler(10)}> 10s </button>
                <button style={{backgroundColor:duration === 20 && 'rgb(74, 30, 235)'}} onClick={()=> breakHandler(20)}> 20s </button>
                <button style={{backgroundColor:duration === 30 && 'rgb(74, 30, 235)'}} onClick={()=> breakHandler(30)}> 30s </button>
                <button style={{backgroundColor:duration === 40 && 'rgb(74, 30, 235)'}} onClick={()=> breakHandler(40)}> 40s </button>
                <button  style={{backgroundColor:duration === 50 && 'rgb(74, 30, 235)'}}onClick={()=> breakHandler(50)}> 50s </button>
            </div>

            <h3>Exersize Details</h3>
            <h4 className='info-display'>Exersize Time: {props.addValue} sec</h4>
            <h4 className='info-display'>Break Time: {duration} sec</h4>

            <button onClick={notify} className='addButton2'>Complete Activities</button>
            <ToastContainer />

            
        </div>
    );
};

export default Info;