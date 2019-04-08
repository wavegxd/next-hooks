import React, { useState, useEffect } from 'react';
import { useTitleInput } from '../lib/hooks/useTitleInput';

const UseStateComponent = () => {
  const [name, setName] = useTitleInput('');
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await fetch(`https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes`);
    const data = await res.json();
    setDishes(data);
  };

  // control use effect with the second parameter
  // empty array is equal to onmount
  // be sure to control it by adding a param to array

  useEffect(() => {
    fetchDishes();
  }, [name]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
      {dishes.map(dish => (
        <article className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default UseStateComponent;
