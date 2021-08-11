/* 
What is the context API when you will use it?

The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.

Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
 */

import React, { useState, useContext } from "react";
import { data } from "../../../data";

// Create Context
const PersonContext = React.createContext();
// two components - Provider (root/top component), Consumer

const ContextAPI = () => {
	const [people, setPeople] = useState(data);
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};
	return (
		<PersonContext.Provider value={{ removePerson, people }}>
			<h3>Context API / useContext</h3>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	const mainData = useContext(PersonContext);
	console.log(mainData);
	return (
		<>
			{mainData.people.map((person) => {
				return <SinglePerson key={person.id} {...person} />;
			})}
		</>
	);
};

const SinglePerson = ({ id, name }) => {
	const { removePerson } = useContext(PersonContext);

	return (
		<div className="item">
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};

export default ContextAPI;
