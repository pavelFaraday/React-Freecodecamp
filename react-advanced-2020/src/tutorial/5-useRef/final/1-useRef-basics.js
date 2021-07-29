import React, { useEffect, useRef } from "react";

// preserves/saves values
// DOES NOT trigger re-render
// mostly is used to target DOM nodes/elements !!!

const UseRefBasics = () => {
	const inputContainer = useRef(null);
	const divContainer = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		// not for functional purpose! only for examples!
		console.log(inputContainer.current.value);
		// not for functional purpose! only for examples!
		console.log(divContainer.current);
	};

	// focus on input field after rendering
	useEffect(() => {
		inputContainer.current.focus();
	});

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div>
					{/* preserves/saves values */}
					<input type="text" ref={inputContainer} />
				</div>
				<button type="submit">submit</button>
			</form>

			{/* it mostly is used to target DOM nodes/elements !!! */}
			<div ref={divContainer}>Hello World</div>
		</>
	);
};

export default UseRefBasics;
