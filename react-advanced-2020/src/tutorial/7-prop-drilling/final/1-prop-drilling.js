/*
Prop drilling is the process in a React app where props are passed from one part of a tree to another by going through other parts that do not need the data, but only help in passing it through the tree.

In our case, removePerson() function is on the top component (PropDrilling). And we need it pass as prop of 'SinglePerson' component. 'List' component does not need {removePerson} prop, but for correct code working it is must - we cannot skip 'List' component.

This problem is fixing with - Context api, redux (for more complex cases)

Why is Prop drilling bad?
To be fair, prop drilling isn't all bad because the pattern provides you with a very specific way of passing data using a top-down approach. But sometimes, it's just very annoying to specifically pass props down between components, especially when your React application is ten layers deep.

What is the difference between the context API and prop drilling?
Prop drilling is the process to get data to parts of the React Component tree, and the Context API provides a way to share values between different components, without having to explicitly pass a prop through every level. The context API allows better performance.
*/

import React, { useState } from "react";
import { data } from "../../../data";
// more components
//

const PropDrilling = () => {
	const [people, setPeople] = useState(data);
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};
	return (
		<section>
			<h3>prop drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};

const List = ({ people, removePerson }) => {
	return (
		<>
			{people.map((person) => {
				return (
					<SinglePerson
						key={person.id}
						{...person}
						removePerson={removePerson}
					/>
				);
			})}
		</>
	);
};

const SinglePerson = ({ id, name, removePerson }) => {
	return (
		<div className="item">
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};

export default PropDrilling;
