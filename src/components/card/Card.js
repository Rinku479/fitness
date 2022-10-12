import React from 'react';
import './Card.css';

const card = (props) => {
    const { category, age, time, img } = props.workout;
    return (
        <div className='card'>
            <div className='card-info'>
                <img src={img} alt="" />
                <h3>{category}</h3>
                <h4>Age Range: {age}</h4>
                <h4>Duration: {time}</h4>
            </div>
            <button className='btn-cart' onClick={() => props.handleTime(time)}>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default card;