import React, { useState, useEffect } from 'react';
import Details from '../details/Details';
import Card from '../card/Card';
import "./Dashboard.css"

const Dashboard = () => {
    const [workouts, setWorkout] = useState([]);

    useEffect(() => {
        fetch('fakeData/workouts.json')
            .then(res => res.json())
            .then(data => setWorkout(data))
    }, [])

    const [duration, setDuration] = useState([]);

    const handleTime = (time) => {
        const newTime = [...duration, time];
        setDuration(newTime);
    }

    return (
        <div className='dashboard'>
            <div className='display'>
                <div className='header'>
                    <h1>Fitness Hub</h1>
                    <h4>Select Today's Exercise</h4>
                </div>
                <div className='cards'>
                    {
                        workouts.map(workout => <Card key={workout.id} workout={workout} handleTime={handleTime}></Card>)
                    }
                </div>
            </div>
            <Details duration={duration}></Details>
        </div>
    );
};

export default Dashboard;