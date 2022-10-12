import React, { useState } from 'react';
import './Details.css'

const Details = ({ duration }) => {
    let time = 0;

    for (let i = 0; i < duration.length; i++) {
        time += duration[i]
    }

    const [breaktime, setBreakTime] = useState([]);

    const breakTime = (time) => {
        const breaktime = time;
        setBreakTime(breaktime);
    }

    return (
        <div className='details'>
            <div className='details-info'>
                <div className='user'>
                    <div>
                        <img src="user.jpeg" alt="" />
                    </div>
                    <div>
                        <h3>Farhan Hoque</h3>
                        <h5>Chittagong, Bangladesh</h5>
                    </div>
                </div>
                <div className='fitness' id='flex'>
                    <h4>75 kg</h4>
                    <h4>6.5 ft</h4>
                    <h4>25yrs</h4>
                </div>
                <h3>Add a Break</h3>
                <div className='break' id='flex'>
                    <h5 onClick={() => breakTime("10 seconds")}>10s</h5>
                    <h5 onClick={() => breakTime("20 seconds")}>20s</h5>
                    <h5 onClick={() => breakTime("30 seconds")}>30s</h5>
                    <h5 onClick={() => breakTime("40 seconds")}>40s</h5>
                    <h5 onClick={() => breakTime("50 seconds")}>50s</h5>
                </div>
                <h3>Exercise Details</h3>
                <div className='calculation'>
                    <p>Exercise Time: {time} minutes</p>
                    <p>Break Time: {breaktime}</p>
                </div>
                <button className='btn-activity'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Details;