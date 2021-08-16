// Custom Hooks are a mechanism to reuse stateful logic. every time you use a custom Hook, all state and effects inside of it are fully isolated.

/*
Can I use custom hook inside custom hook?
While custom React Hooks are just Javascript functions, we can actually use other hooks inside them. Custom hooks allow us to have cleaner functional components, remove logic from the UI layer, and prevent code duplication by bringing common use cases to reusable hooks.
*/

import { useState, useEffect, useCallback } from "react";

// This is just javascript function, NOT A COMPONENT!
// You need to export custom hook
export const useFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const getProducts = useCallback(async () => {
		const response = await fetch(url);
		const products = await response.json();
		setProducts(products);
		setLoading(false);
	}, [url]);

	useEffect(() => {
		getProducts();
	}, [url, getProducts]);
	return { loading, products };
};
