import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';
const Foods = () => {

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
          fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          .then(res => res.json())
          .then(data => {
                setFoods(data.meals)
                setLoading(true)
          })

    }, [])

    return (
        <div className='food-container'>
            <h1>this is foods page..!</h1>
             <div className='food-section'>
                  {
                    loading ?  foods.map(food => <Food key={food.idMeal}  food={food}></Food> ) : <p style={{textAlign:"center"}}>Loading...</p>
                  }
             </div>
        </div>
    );
};

export default Foods;