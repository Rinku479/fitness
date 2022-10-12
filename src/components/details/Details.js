import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './Details.css'

const Details = ({ duration }) => {

    const showToastMessage = () => {
        toast("Plan Ready For Today!!! Go and Workout", {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
        });
    };


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
                    <button onClick={() => breakTime("10 seconds")}>10s</button>
                    <button onClick={() => breakTime("20 seconds")}>20s</button>
                    <button onClick={() => breakTime("30 seconds")}>30s</button>
                    <button onClick={() => breakTime("40 seconds")}>40s</button>
                    <button onClick={() => breakTime("50 seconds")}>50s</button>
                </div>
                <h3>Exercise Details</h3>
                <div className='calculation'>
                    <p>Exercise Time: {time} minutes</p>
                    <p>Break Time: {breaktime}</p>
                </div>
                <div>
                    <button className='btn-activity' onClick={showToastMessage}>Activity Completed</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Details;