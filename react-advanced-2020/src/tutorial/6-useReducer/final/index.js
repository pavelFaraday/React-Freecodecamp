// An alternative to useState. useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

/*
const [state, dispatch] = useReducer(reducer, defaultState);

When we envoke useReducer we are getting 2 things back: state value and dispatch function.

Main scheme: So useReducer is looking for 'reducer' (the function that manipulates old state). And it will happen when we call 'dispatch' (when we dispatch the action)

----------------
'reducer' parameter is an function, that takes an old state and takes it in action and speeds back the new state. It is a simple function:

state - current state before update;
action - what are we trying to do; 

const reducer = (state, action) => {

}
----------------

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: "",
};

'defaultState' parameter is a variable (boolian, integer, string, object, array..) of initial/default simple /or/ complexed state..

----------------

Difference between useState da useReducer is: each every time you want something do with useReduser, you must always use 'dispatch' through 'reducer'. You must always use both of them.

*/

import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

// reducer function
import { reducer } from "./reducer";
const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: "",
};
const Index = () => {
	const [name, setName] = useState("");
	const [state, dispatch] = useReducer(reducer, defaultState);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			const newItem = { id: new Date().getTime().toString(), name };
			dispatch({ type: "ADD_ITEM", payload: newItem });
			setName("");
		} else {
			dispatch({ type: "NO_VALUE" });
		}
	};
	const closeModal = () => {
		dispatch({ type: "CLOSE_MODAL" });
	};
	return (
		<>
			{state.isModalOpen && (
				<Modal
					closeModal={closeModal}
					modalContent={state.modalContent}
				/>
			)}
			<form onSubmit={handleSubmit} className="form">
				<div>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type="submit">add </button>
			</form>
			{state.people.map((person) => {
				return (
					<div key={person.id} className="item">
						<h4>{person.name}</h4>
						<button
							onClick={() =>
								dispatch({
									type: "REMOVE_ITEM",
									payload: person.id,
								})
							}
						>
							remove
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;
