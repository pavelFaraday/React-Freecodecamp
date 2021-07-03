import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  // Remove individual item from an array
  // Meaneng: Leave all elements that doesnt have certain id
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {/* Clear all Array item - make Array empty*/}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );

};

export default UseStateArray;
