import React from 'react';
import './Food.css';
const Food = (props) => {
    const {strMealThumb} = props.food;

    return (
        <div className='food-box'>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default Food;