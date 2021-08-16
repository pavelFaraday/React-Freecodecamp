// Custom Hooks are a mechanism to reuse stateful logic. every time you use a custom Hook, all state and effects inside of it are fully isolated.

/*
Can I use custom hook inside custom hook?
While custom React Hooks are just Javascript functions, we can actually use other hooks inside them. Custom hooks allow us to have cleaner functional components, remove logic from the UI layer, and prevent code duplication by bringing common use cases to reusable hooks.
*/

import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch"; // export custom hook

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
	// call custom hook
	const { loading, products } = useFetch(url);

	console.log(products);
	return (
		<div>
			<h2>{loading ? "loading..." : "data"}</h2>
		</div>
	);
};

export default Example;
