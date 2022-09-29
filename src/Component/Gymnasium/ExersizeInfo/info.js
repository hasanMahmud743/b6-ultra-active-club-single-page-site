import React, { useEffect, useState } from 'react';
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


    return (
        <div>
            <h2>This is Mahmudul Hasan</h2>
            <h3> W-63kg, H-5.7", Age-23</h3>
            <h4>Add a Break</h4>
            <div>
                <button onClick={()=> breakHandler(10)}> 10s </button>
                <button onClick={()=> breakHandler(20)}> 20s </button>
                <button onClick={()=> breakHandler(30)}> 30s </button>
                <button onClick={()=> breakHandler(40)}> 40s </button>
                <button onClick={()=> breakHandler(50)}> 50s </button>
            </div>

            <h4>Exersize Details</h4>
            <h3>Exersize Time: {props.addValue}</h3>
            <h3>Break Time: {duration} sec</h3>

            <button>Complete Activities</button>


            
        </div>
    );
};

export default Info;